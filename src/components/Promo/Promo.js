import React from 'react';
import promoImage from '../../images/promo-image.png';
import './Promo.css';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <article className="promo__description">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link-content" href="#about-me" rel="noopener">Узнать больше</a>
        </article>
        <img className="promo__illustration" src={promoImage} alt="изображение вселенной" />
      </div>
    </div>
  );
}

export default Promo;