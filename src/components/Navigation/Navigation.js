import React from 'react';
import iconMain from '../../images/header-icon-main.svg';
import './Navigation.css';
import { Switch, NavLink, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Navigation({ loggedIn }) {
  return (
    <>
      <Switch>
        <nav className="header__navigation">
          <Route exact path={["/movies", "/saved-movies", "/profile"]}>
            <ul className="header__links">
              <li><NavLink className="header__link-movies" to="/movies" target="__blank" rel="noopener">Фильмы</NavLink></li>
              <li><NavLink className="header__link-saved-movies" to="/saved-movies" target="__blank" rel="noopener">Сохранённые фильмы</NavLink></li>
            </ul>
          </Route>

          <Route exact path="/">
            {loggedIn ? (
              <>
                <ul className="header__links">
                  <li><NavLink className="header__link-movies" to="/movies" target="__blank" rel="noopener">Фильмы</NavLink></li>
                  <li><NavLink className="header__link-saved-movies" to="/saved-movies" target="__blank" rel="noopener">Сохранённые фильмы</NavLink></li>
                </ul>
                <NavLink className="header__link-profile" to="/profile">Аккаунт
                  <img className="header__icon-profile" src={iconMain} alt="изображение профиля пользователя" />
                </NavLink>
                <NavBar />
              </>
            ) : (
              <ul className="header__links-auth">
                <li><NavLink className="header__link-signup" to="/signup" target="__blank" rel="noopener">Регистрация</NavLink></li>
                <li><NavLink className="header__link-login" to="/signin" target="__blank" rel="noopener">Войти</NavLink></li>
              </ul>
            )}
            
          </Route>

          <Route exact path={["/movies", "/saved-movies", "/profile"]}>
            <NavLink className="header__link-profile" to="/profile">Аккаунт
              <img className="header__icon-profile" src={iconMain} alt="изображение профиля пользователя" />
            </NavLink>
            <NavBar />
          </Route>
        </nav>
      </Switch>
    </>
  );
}

export default Navigation;