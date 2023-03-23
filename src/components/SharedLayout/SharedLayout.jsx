import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
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
        <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </Layout>
  );
};
