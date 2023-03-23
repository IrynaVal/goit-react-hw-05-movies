import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const filmQuery = searchParams.get('query') ?? '';

  const handleChange = evt => {
    setQuery(evt.target.value);
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (!query) {
      toast.error(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
      return;
    }

    onSubmit(query);
  };

  return (
    <form className={css.SearchForm} onSubmit={handleFormSubmit}>
      <input
        className={css.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={filmQuery}
        onChange={handleChange}
      />
      <button type="submit" className={css.SearchForm_button}>
        <span className={css.SearchForm_button_label}>
          <BsSearch size="20" fill="#000" />
        </span>
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
