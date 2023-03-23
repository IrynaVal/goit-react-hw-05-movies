import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieContainer = ({
  film: {
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  },
}) => {
  const poster = `https://image.tmdb.org/t/p/w780${poster_path}`;

  const getReleaseYear = function (date = release_date) {
    return date ? date.slice(0, 4) : 'year n/a';
  };

  const getFilmGenres = function (genresArray = genres) {
    if (!genresArray || genresArray.length === 0) {
      return 'n/a';
    }
    return genresArray.map(genre => genre.name).join(' ');
  };
  return (
    <>
      <div className="movie__container">
        <div className="movie__img">
          <img src={poster} alt={title} className="movie__poster" />
        </div>
        <div className="movie__text">
          <h2 className="movie__name">
            {original_title} ({getReleaseYear()})
          </h2>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>

          <h3 className="movie__about">Overview</h3>
          {overview !== '' ? (
            <p className="movie__film-about">{overview}</p>
          ) : (
            <p>n/a</p>
          )}

          <h4>Genres</h4>
          <p>{getFilmGenres()}</p>
        </div>
      </div>
      <p>Additional Information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};

MovieContainer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    poster_path: PropTypes.string,
  }).isRequired,
};
