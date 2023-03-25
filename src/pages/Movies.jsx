import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { getFilmByQuery } from '../services/getFilms';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const filmQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    setSearchQuery(filmQuery);

    if (!searchQuery) {
      return;
    }

    setLoading(true);
    getFilmByQuery(searchQuery)
      .then(data => {
        // console.log(data.results);
        if (data.results.length === 0) {
          return Promise.reject(new Error());
        }
        setFilms(data.results);
      })
      .catch(error => {
        toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, filmQuery]);

  const formSubmitHandler = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <>
      <Toaster position="top-right" />
      <Searchbar onSubmit={formSubmitHandler} />

      {films.length !== 0 && <MoviesList films={films} />}
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

export default Movies;
