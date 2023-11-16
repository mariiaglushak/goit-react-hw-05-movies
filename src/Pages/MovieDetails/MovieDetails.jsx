import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { FetchRequest } from 'Services/request';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import { DefaultImage } from 'components/DefaulImage/ingex';
import {
  WrapDetails,
  MainWrapper,
  Title,
  SectionDetails,
  UserScore,
  AddInfo,
  DetailsList,
  ListBtn,
  ItemListBtn,
  ReliseDate,
} from './MovieDetailsStyle';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const detailsMovieGet = async () => {
      const DETAILS_URL = `/movie/${movieId}`;
      setIsLoading(true);
      try {
        const details = await FetchRequest(DETAILS_URL);
        const { data } = details;
        setMovieDetails(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    detailsMovieGet();
  }, [movieId]);

  const rating = Math.round(movieDetails?.vote_average * 10);
  return (
    <MainWrapper>
      {isLoading && <Loader />}
      <Link to={goBackLink.current}>
        <Button text="< Go Back" />
      </Link>
      <WrapDetails>
        <img
          src={
            movieDetails?.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`
              : DefaultImage
          }
          width="100%"
          alt={movieDetails?.title}
        />
        <SectionDetails>
          <Title>{movieDetails?.title}</Title>
          <UserScore>User Score : {rating}%</UserScore>
          <ReliseDate>Release date: {movieDetails?.release_date}</ReliseDate>
          <h2>Overview</h2>
          <p>{movieDetails?.overview}</p>
          <h2>Genres</h2>
          <DetailsList>
            {movieDetails?.genres.map(el => (
              <li key={el.name}>{el.name}</li>
            ))}
          </DetailsList>
        </SectionDetails>
      </WrapDetails>
      <div>
        <AddInfo>Additional information</AddInfo>
        <ListBtn>
          <ItemListBtn>
            <Link to="cast">
              <Button text="Cast" />
            </Link>
          </ItemListBtn>
          <ItemListBtn>
            <Link to="reviews">
              <Button text="Reviews" />
            </Link>
          </ItemListBtn>
        </ListBtn>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </MainWrapper>
  );
};
export default MovieDetails;
