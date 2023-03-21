import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
// import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
