import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <NavLink className="notfound__link" to="/" target="__blank" rel="noopener">Назад</NavLink>
    </div>
  );
}

export default NotFound;