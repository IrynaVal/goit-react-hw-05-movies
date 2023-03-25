import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.length !== 0 &&
        films.map(({ id, title }) => {
          return (
            <li key={id}>
              <MovieTitle to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieTitle>
            </li>
          );
        })}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
