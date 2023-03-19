import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/getFilms';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getFilmReviews(movieId)
      .then(data => {
        console.log(data.results);
        if (!data) {
          return Promise.reject(new Error());
        }
        setReviews(data.results);
      })
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  // const posterURL = `https://image.tmdb.org/t/p/w780`;
  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}

      {loading && <p>Loading...</p>}
    </>
  );
};
