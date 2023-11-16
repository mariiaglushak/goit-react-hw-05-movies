import { FetchRequest } from 'Services/request';
import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

import { MainTitle } from './HomeStyle';

const Home = () => {
  const [trendingMovie, setTendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const movieTime = async () => {
      const URL_TRENDING = '/trending/movie/day';
      try {
        const data = await FetchRequest(URL_TRENDING);
        const { results } = data.data;
        console.log(results);
        setTendingMovie(results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    movieTime();
  }, []);

  return (
    <div>
      <MainTitle>Trending movies</MainTitle>
      {isLoading && trendingMovie ? (
        <Loader />
      ) : (
        <MovieList films={trendingMovie} />
      )}
    </div>
  );
};
export default Home;
