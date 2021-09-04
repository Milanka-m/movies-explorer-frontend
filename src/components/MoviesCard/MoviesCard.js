import React from 'react';
import iconDelete from '../../images/icon-delete.svg';
import './MoviesCard.css';

function MoviesCard({ 
  location, 
  onMovieSave, 
  onMovieDelete, 
  savedUserMovies, 
  movie,
  movieId,
  country,
  director,
  year,
  description,
  trailer,
  thumbnail,
  nameRU, 
  nameEN,
  image,
  duration 
}) {
  
  const movieData = { movieId, country, director, duration, year, description, trailer, thumbnail, nameRU, nameEN, image };
  const isSavedMovie = savedUserMovies.some(i => i.nameRU === nameRU);
  const movieSaveButtonClassName = `${isSavedMovie && 'elements__icon-favorite_active'}`;

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
	  const minutes = mins % 60;
	  return hours + 'ч ' + minutes + 'м';
  };

  function handleClickSavedMovie() {
   if (isSavedMovie) {
      savedUserMovies.forEach((savedMovie) => {
        if (savedMovie.nameRU === nameRU) {
          onMovieDelete(savedMovie._id);
        }
      });
    } else {
      onMovieSave(movieData);
    }
  };

  const handleClickDeleteMovie = () => {
    onMovieDelete(movie._id);
  };

  return (
    <article className="elements__movie">
      <a href={trailer} 
        className="elements__movie-link" 
        target="_blank" 
        rel="noopener noreferrer">
          <img className="elements__movie-image" src={image} alt={nameRU} />
      </a>
      <div className="elements__label">
        <ul className="elements__list">
          <li><h2 className="elements__heading">{nameRU}</h2></li>
          <li><p className="elements__time">{getTimeFromMins(duration)}</p></li> 
        </ul>
        {location === '/movies' ? ( 
          <button 
            className={`elements__icon-favorite ${movieSaveButtonClassName}`} 
            type="button" 
            aria-label="Сохранить фильм" 
            onClick={handleClickSavedMovie}>
          </button>
        ) : (
          <button 
            className="elements__button-delete" 
            type="button" 
            aria-label="Удалить фильм" 
            onClick={handleClickDeleteMovie}>
              <img className="elements__icon-delete" src={iconDelete} alt="Удалить фильм" />
          </button>
        )}
      </div> 
    </article> 
  );
}

export default MoviesCard;