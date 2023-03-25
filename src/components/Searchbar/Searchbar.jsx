import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BsSearch } from 'react-icons/bs';
import { SearchForm, StyledButton, FormInput } from './Searchbar.styled';
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
    // console.log(evt.target.value);
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
    <SearchForm onSubmit={handleFormSubmit}>
      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        value={filmQuery}
        onChange={handleChange}
      />
      <StyledButton type="submit">
        <BsSearch size="20" fill="#000" />
      </StyledButton>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
