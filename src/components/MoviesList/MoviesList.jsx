import { NavLink } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.length !== 0 &&
        films.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>
                {title}
                {name}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
