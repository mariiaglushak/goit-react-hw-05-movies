import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchRequest } from 'Services/request';

import {
  ReviewsList,
  ReviewsItem,
  RevAuchtor,
  RevAutorName,
  RevText,
  NoReviews,
} from './ReviewsStyle';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      const URL_REVIEWS = `/movie/${movieId}/reviews`;
      try {
        const data = await FetchRequest(URL_REVIEWS);
        const { results } = data.data;
        setReviews(results);
      } catch (err) {
        console.log(err);
      }
    };
    movieReviews();
  }, [movieId]);
  return (
    <ReviewsList>
      {reviews?.length === 0 ? (
        <NoReviews>We don't have any rewievs for this movie </NoReviews>
      ) : (
        reviews?.map(el => (
          <ReviewsItem key={el.author}>
            <RevAuchtor>
              Author: <RevAutorName>{el.author}</RevAutorName>
            </RevAuchtor>
            <RevText>{el.content}</RevText>
          </ReviewsItem>
        ))
      )}
    </ReviewsList>
  );
};

export default Reviews;
