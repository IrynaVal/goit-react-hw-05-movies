import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: solid grey 2px;
`;

export const MoviePoster = styled.div`
  width: 400px;
`;
export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const AddInfo = styled.div`
  padding-bottom: 20px;
  border-bottom: solid grey 2px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
  }
`;
