import { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { getFilmById } from 'services/getFilms';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getFilmById(movieId)
      .then(data => {
        console.log(data);
        if (!data) {
          return Promise.reject(new Error());
        }
        setFilm(data);
      })
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  const {
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  } = film;

  const poster = `https://image.tmdb.org/t/p/w780${poster_path}`;

  const releaseYear = function (date = release_date) {
    return date ? date.slice(0, 4) : 'year n/a';
  };

  const filmGenres = function (genresArray = genres) {
    if (!genresArray) {
      return 'n/a';
    }
    return genresArray.map(genre => genre.name).join(' ');
  };

  return (
    <>
      <div className="movie__container">
        <div className="movie__img">
          <img
            src={poster}
            alt={title}
            className="movie__poster"
            // onError="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png';"
          />
        </div>
        <div className="movie__text">
          <h2 className="movie__name">
            {original_title} ({releaseYear()})
          </h2>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>

          <h3 className="movie__about">Overview</h3>
          <p className="movie__film-about">{overview}</p>

          <h4>Genres</h4>
          <p>{filmGenres()}</p>
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
      <Outlet />
      {loading && <p>Loading...</p>}
    </>
  );
};

export default MovieDetails;