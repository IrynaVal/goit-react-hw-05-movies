import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Photo, ListItem } from './Cast.styled';
import { ColorRing } from 'react-loader-spinner';
import { getFilmCast } from 'services/getFilms';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getFilmCast(movieId)
      .then(data => {
        console.log(data.cast);
        if (data.cast.length === 0) {
          return Promise.reject(new Error());
        }
        setCast(data.cast);
      })
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  const posterURL = `https://image.tmdb.org/t/p/w780`;

  return (
    <>
      {cast.length !== 0 ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <ListItem key={id}>
                <Photo src={posterURL + profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </ListItem>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, there is no information about this movie cast.</p>
      )}
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

export default Cast;
