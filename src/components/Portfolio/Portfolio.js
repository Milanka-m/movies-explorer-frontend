import React from 'react';
import { NavLink } from 'react-router-dom';
import iconArrow from '../../images/icon-arrow.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <a className="portfolio__link" href="https://github.com/Milanka-m" target="_blank" rel="noopener noreferrer">Портфолио</a>
      <NavLink className="portfolio__links" to="/" target="_blank" rel="noopener">
        <p className="portfolio__link-info">Статичный сайт</p>
        <img className="portfolio__link-arrow" src={iconArrow} alt="иконка стрелки" />
      </NavLink>
      <NavLink className="portfolio__links" to="/" target="_blank" rel="noopener">
        <p className="portfolio__link-info">Адаптивный сайт</p>
        <img className="portfolio__link-arrow" src={iconArrow} alt="иконка стрелки" />
      </NavLink>
      <NavLink className="portfolio__links" to="/" target="_blank" rel="noopener">
        <p className="portfolio__link-info">Одностраничное приложение</p>
        <img className="portfolio__link-arrow" src={iconArrow} alt="иконка стрелки" />
      </NavLink>
    </section>
  );
}

export default Portfolio;