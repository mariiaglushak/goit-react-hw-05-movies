import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import { NawList, NawItem } from './AppStyle';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <NawList>
        <NawItem>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
        </NawItem>
        <NawItem>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </NawItem>
      </NawList>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
