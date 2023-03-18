import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFilmById } from 'services/getFilms';

const MovieDetails = () => {
  const { movieId } = useParams();
  // const film = getFilmById(movieId);
  // console.log(film);
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
        // console.log(film);
      })
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);
  const poster = `https://image.tmdb.org/t/p/w780${film.poster_path}`;
  const { title, original_title, release_date, vote_average, overview } = film;
  // const releaseYear = release_date.slice(0, 4);
  console.log(release_date);
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
            {original_title}({release_date})
          </h2>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>

          <h3 className="movie__about">Overview</h3>
          <p className="movie__film-about">{overview}</p>

          <h4>Genres</h4>
          <p>
            {/* {genres.map(genre => {
              return genre.name + '  ';
            })} */}
          </p>
        </div>
      </div>
      <div>Now showing product with id - {movieId}</div>
      <Outlet />
      {loading && <p>Loading...</p>}
    </>
  );
};

export default MovieDetails;
