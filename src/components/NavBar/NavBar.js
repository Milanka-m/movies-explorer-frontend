import React from 'react';
import iconMain from '../../images/header-icon-main.svg';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="header__hamburger-menu">
      <input id="header__menu-toggle" type="checkbox" />
      <label className="header__menu-btn" for="header__menu-toggle">
        <span className="header__span"></span>
      </label>
      <div className="header__menu-container">
        <ul className="header__menu-box">
          <li className="header__menu-box-item"><NavLink className="header__menu-item" to="/">Главная</NavLink></li>
          <li className="header__menu-box-item"><NavLink className="header__menu-item" to="/movies">Фильмы</NavLink></li>
          <li className="header__menu-box-item"><NavLink className="header__menu-item" to="/saved-movies">Сохранённые фильмы</NavLink></li>
          <li>
            <NavLink className="header__menu-link-profile" to="/profile">Аккаунт
              <img className="header__icon-profile" src={iconMain} alt="изображение профиля пользователя" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;