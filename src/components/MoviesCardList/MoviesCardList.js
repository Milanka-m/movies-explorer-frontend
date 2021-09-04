import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ 
  location, 
  initialMovies = [], 
  onMovieSave, 
  onMovieDelete, 
  savedUserMovies }) {
  
  const [countMovies, setCountMovies] = React.useState(0);

  React.useEffect(() => {
    location === '/movies' ? actualResizeHandler() : setCountMovies(initialMovies.length);
  }, [initialMovies, location]);

  function actualResizeHandler() {
    if (window.innerWidth > 1250) {
      setCountMovies(12);
    } else if (window.innerWidth > 750) {
      setCountMovies(8);
    }
    else {
      setCountMovies(5);
    }
  }

  function addMoreMovies() {
    if (window.innerWidth > 1250) {
      setCountMovies(countMovies + 3);
    } else {
      setCountMovies(countMovies + 2);
    }
  };

  const disableMoviesButton = React.useMemo(() => {
    return countMovies >= initialMovies.length ? 'elements__movie-button_hidden' : '';
  }, [countMovies, initialMovies]);

  return (
    <section className="elements">
      <div className="elements__container">
        {initialMovies.slice(0, countMovies).map(movie => {  
          return (  
            <MoviesCard 
              location={location}
              onMovieSave={onMovieSave}
              onMovieDelete={onMovieDelete}
              savedUserMovies={savedUserMovies}
              movie={movie}
              movieId={movie.id || movie.movieId}
              country={movie.country}
              director={movie.director}
              duration={movie.duration}
              year={movie.year}
              description={movie.description}
              trailer={movie.trailerLink || movie.trailer}
              thumbnail={movie.thumbnail || `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
              nameRU={movie.nameRU}
              nameEN={movie.nameEN}
              image={location === '/saved-movies' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
              key={movie.id} 
            />  
          )  
        })}
      </div>  
      <button 
        onClick={addMoreMovies} 
        className={
          location === '/movies'
          ? `elements__movie-button ${disableMoviesButton}`
          : 'elements__movie-button elements__movie-button_hidden'}>
        Ещё
      </button>
    </section> 
  );
}

export default MoviesCardList;