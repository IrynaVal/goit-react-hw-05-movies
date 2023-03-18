import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getFilms } from '../services/getFilms';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFilms()
      .then(data => {
        console.log(data);
        console.log(data.results);
        if (data.results.length === 0) {
          return Promise.reject(new Error());
        }
        setFilms(data.results);
      })
      .catch(error => {
        console.log('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {films.length !== 0 &&
          films.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <NavLink to="/movies/:movieId">
                  {title}
                  {name}
                </NavLink>
              </li>
            );
          })}
      </ul>
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Home;
