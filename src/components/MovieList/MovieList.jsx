import { Link, useLocation } from 'react-router-dom';
import { DefaultImage } from 'components/DefaulImage/ingex';

import css from './MovieList.module.css';

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {films.map(film => (
          <li key={film.id} className={css.item}>
            <Link
              state={{ from: location }}
              to={`/movies/${film.id}`}
              className={css.link}
            >
              <img
                src={
                  film.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`
                    : DefaultImage
                }
                width="200px"
                alt={film.name}
              />
              <p className={css.title}>{film.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
