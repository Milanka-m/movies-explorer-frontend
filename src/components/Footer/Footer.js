import React from 'react';
import { Route } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <Route exact path={["/", "/movies", "/saved-movies"]}>
      <footer className="footer">
        <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__column">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__column-links">
            <li className="footer__item">
              <a 
                href="https://praktikum.yandex.ru/" 
                className="footer__link" 
                target="_blank" 
                rel="noopener noreferrer">Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://github.com/Milanka-m" 
                className="footer__link" 
                target="_blank" 
                rel="noopener noreferrer">Github
              </a>
            </li>
            <li className="footer__item">
              <a 
                href="https://www.facebook.com/profile.php?id=100000351628871" 
                className="footer__link" 
                target="_blank" 
                rel="noopener noreferrer">Facebook
              </a>
            </li>
          </ul>
        </div> 
      </footer>
    </Route>
  );
}

export default Footer;