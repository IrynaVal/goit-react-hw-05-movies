import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.length !== 0 &&
        films.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
                {name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
