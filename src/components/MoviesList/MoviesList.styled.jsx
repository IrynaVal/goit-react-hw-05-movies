import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieTitle = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
  }
`;
