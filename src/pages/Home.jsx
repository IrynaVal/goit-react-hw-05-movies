import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getFilms } from '../services/getFilms';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFilms()
      .then(data => {
        // console.log(data);
        // console.log(data.results);
        if (data.results.length === 0) {
          return Promise.reject(new Error());
        }
        setFilms(data.results);
      })
      .catch(error => {
        toast.error('Sorry, there are no movies.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <h2>Trending today</h2>
      {films.length !== 0 && <MoviesList films={films} />}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Home;
