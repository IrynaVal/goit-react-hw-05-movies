import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
// import { ColorRing } from 'react-loader-spinner';
import { Searchbar } from '../components/Searchbar/Searchbar';
// import { Button } from 'components/Button/Button';
import { getFilmByQuery } from '../services/getFilms';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    getFilmByQuery(searchQuery)
      .then(data => {
        // console.log(data);
        if (data.results === 0) {
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
  }, [searchQuery]);

  const formSubmitHandler = searchQuery => {
    setSearchQuery(searchQuery);
    setFilms([]);
    // setPage(1);
  };

  // const updateQueryString = searchQuery => {
  //   const nextParams = searchQuery !== '' ? { searchQuery } : {};
  //   setSearchParams(nextParams);
  // };
  const updateQueryString = evt => {
    setSearchParams({ query: evt.target.value });
  };

  // const handleLoad = () => {
  //   setPage(prevState => prevState + 1);
  // };

  return (
    <div
    // style={{
    //   display: 'grid',
    //   gridTemplateColumns: '1fr',
    //   gridGap: '16px',
    //   paddingBottom: '24px',
    // }}
    >
      <Toaster position="top-right" />
      <Searchbar
        onSubmit={formSubmitHandler}
        value={filmQuery}
        onChange={updateQueryString}
      />

      {films.length !== 0 && <MoviesList films={films} />}
      {loading && (
        <p>Loading...</p>
        // <ColorRing
        //   visible={true}
        //   height="80"
        //   width="80"
        //   ariaLabel="blocks-loading"
        //   wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
        //   wrapperClass="blocks-wrapper"
        //   colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        // />
      )}
      {/* {films.length !== 0 && !loading && <Button onClick={handleLoad} />} */}
    </div>
  );
};

export default Movies;
