import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

// import styled from 'styled-components';
// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
