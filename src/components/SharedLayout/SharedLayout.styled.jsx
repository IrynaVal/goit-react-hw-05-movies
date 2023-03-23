import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  margin: 0 auto;
  padding-bottom: 40px;
`;

export const Container = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
`;
export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: orange;
  }

  &.active {
    color: red;
  }
`;
