import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.length !== 0 &&
        films.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
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
