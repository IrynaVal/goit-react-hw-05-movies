import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Layout,
  StyledHeader,
  StyledNav,
  StyledLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </Layout>
  );
};
