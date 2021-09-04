import React from 'react';
import { Route } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ location, loggedIn }) {
  return (
    <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
      <header className={`header ${!loggedIn && location==="/" && 'header_dark'}`}>
        <div className="header__container">
          <Logo />
          <Navigation loggedIn={loggedIn} />
        </div>
      </header>
    </Route>
  );
}

export default Header;