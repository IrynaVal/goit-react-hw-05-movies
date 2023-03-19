import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'services/getFilms';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getFilmCast(movieId)
      .then(data => {
        console.log(data.cast);
        if (!data) {
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
      <ul>
        {cast.length !== 0 &&
          cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img src={posterURL + profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
      {loading && <p>Loading...</p>}
    </>
  );
};
