import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchRequest } from 'Services/request';
import { DefaultImage } from 'components/DefaulImage/ingex';

const Cast = () => {
  const [castDetails, setCastDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const requestCast = async () => {
      const URL_CAST = `/movie/${movieId}/credits`;
      try {
        const data = await FetchRequest(URL_CAST);
        const { cast } = data.data;
        setCastDetails(cast);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    requestCast();
  }, [movieId]);
  return (
    <ul>
      {castDetails?.length === 0 ? (
        <p>We don't have cast of this movie 😪</p>
      ) : (
        castDetails?.map(el => (
          <li key={el.name}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w300${el.profile_path}`
                  : DefaultImage
              }
              width="200px"
              alt={el.name}
            />
            <p>{el.name}</p>
            {el.character && <p>Character: {el.character}</p>}
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
