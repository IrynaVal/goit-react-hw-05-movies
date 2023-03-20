import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
// import { ColorRing } from 'react-loader-spinner';
import { Searchbar } from '../components/Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';
import { getFilmByQuery } from '../services/getFilms';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const [imgPerPage, setImgPerPage] = useState(12);
  // const [imgPerPage] = useState(12);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    getFilmByQuery(searchQuery, page)
      .then(data => {
        // console.log(data);
        // console.log(data.hits);
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
  }, [searchQuery, page]);

  const formSubmitHandler = searchQuery => {
    setSearchQuery(searchQuery);
    setFilms([]);
    setPage(1);
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
      <Searchbar onSubmit={formSubmitHandler} />
      {films.length !== 0 && (
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
      )}
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
