import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { getFilmById } from 'services/getFilms';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieContainer } from 'components/MovieContainer/MovieContainer';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/movies');

  // console.log(location);
  console.log(BackLinkLocationRef.current);

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
        toast.error('Sorry, there is no information about this movie.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <Toaster position="top-right" />
      <BackLink to={BackLinkLocationRef.current}>Go back</BackLink>
      <MovieContainer film={film} />
      <Outlet />
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
