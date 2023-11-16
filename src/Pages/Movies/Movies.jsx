import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FetchRequest } from 'Services/request';
import { BiSearchAlt2 } from 'react-icons/bi';
import MovieList from 'components/MovieList/MovieList';

import Loader from 'components/Loader/Loader';
import { SearchForm, SearchInput, SearchBtn, NoName } from './MoviesStyle';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const nameFilm = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);

    if (!nameFilm) return;

    const movieSearch = async () => {
      const URL_MOVIE_NAME = `/search/movie?query=${nameFilm}`;
      try {
        const data = await FetchRequest(URL_MOVIE_NAME);
        const { results } = data.data;

        setSearchedMovies(results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    movieSearch();
  }, [nameFilm]);

  const onFormsubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value.toLowerCase().trim();

    setSearchParams({ query: value });
    e.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={onFormsubmit}>
        <label>
          <SearchInput
            type="text"
            name="searchKey"
            required
            placeholder="Search films"
          />
        </label>
        <SearchBtn type="submit">
          <BiSearchAlt2 />
        </SearchBtn>
      </SearchForm>
      <div>
        {isLoading && nameFilm ? (
          <Loader />
        ) : (
          <MovieList films={searchedMovies} />
        )}
        {!isLoading && searchedMovies.length === 0 && nameFilm && (
          <NoName>No movie found for the request "{nameFilm}"</NoName>
        )}
      </div>
    </div>
  );
};
export default Movies;
