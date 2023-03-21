import { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
import { getFilmById } from 'services/getFilms';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
        toast.error('Sorry, there is no information about this movie.');
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

  // const navigate = useNavigate();
  // const handleClick = navigate('/home');

  return (
    <>
      <Toaster position="top-right" />
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className="movie__container">
        <div className="movie__img">
          <img src={poster} alt={title} className="movie__poster" />
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
