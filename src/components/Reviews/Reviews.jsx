import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
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
