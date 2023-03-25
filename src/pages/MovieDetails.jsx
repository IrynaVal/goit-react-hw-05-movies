import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { getFilmById } from 'services/getFilms';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieContainer } from 'components/MovieContainer/MovieContainer';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setLoading(true);
    getFilmById(movieId)
      .then(data => {
        // console.log(data);
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

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      <MovieContainer film={film} />
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        <Outlet />
      </Suspense>
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
    </>
  );
};

export default MovieDetails;
