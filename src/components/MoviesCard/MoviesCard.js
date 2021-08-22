import React from 'react';
import iconDelete from '../../images/icon-delete.svg';
import './MoviesCard.css';

function MoviesCard({ location, movie }) {
  return (
    <article className="elements__movie"> 
      <div className="elements__movie-image" style={{ backgroundImage: `url(${movie.link})` }}></div> 
      <div className="elements__label">
        <ul className="elements__list">
          <li><h2 className="elements__heading">{movie.name}</h2></li>
          <li><p className="elements__time">{movie.time}</p></li> 
        </ul>
        {location === '/movies' ? ( 
          <button className="elements__icon-favorite" type="button" aria-label="Поставить лайк"></button>
        ) : (
          <button className="elements__button-delete" type="button" aria-label="Удалить фильм">
            <img className="elements__icon-delete" src={iconDelete} alt="Кнопка удалить фильм" />
          </button>
        )}
        
      </div> 
    </article> 
  );
}

export default MoviesCard;