import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getMovies } from '../../utils/MoviesApi';
import NotFoundMovies from '../NotFoundMovies/NotFoundMovies';
import { filterMovies } from '../../utils/utils';

function Movies({ location, onMovieSave, onMovieDelete, savedUserMovies }) {
  const [initialMovies, setinitialMovies] = React.useState([]);
  const [isPreloaderShow, setPreloaderShow] = React.useState(false);
  const [isErrorMessage, setIsErrorMessage] = React.useState(false);
  const [shortMovieFilter, setShortMovieFilter] = React.useState(false);

  // эффект при монтировании компонента, извлекается массив фильмов из локального хранилища
  React.useEffect(() => {
    const lastSavedMovies = localStorage.getItem('movies');
      if (lastSavedMovies) {
        setinitialMovies(JSON.parse(lastSavedMovies));
      } else {
        setinitialMovies([]);
      }
      setShortMovieFilter(false);
  }, []);

  const handleCheckboxChange = () => {
    setShortMovieFilter(!shortMovieFilter);
    const lastSavedMovies = JSON.parse(localStorage.getItem('movies'));
    if (lastSavedMovies) {
      const moviesFilter = lastSavedMovies.filter(movieCard => movieCard.duration <= 40);
      setinitialMovies(moviesFilter);
    }
  }

  function getInitialMovies(query) {
    setinitialMovies([]);
    setPreloaderShow(true);
    setIsErrorMessage(false);
    getMovies()
      .then((movies) => {
        const moviesCards = movies.filter(movie => filterMovies(movie, query));
        setinitialMovies(moviesCards);
        localStorage.setItem('movies', JSON.stringify(moviesCards));
        setShortMovieFilter(false);
      })
      .catch((err) => {
        console.log(err);
        setIsErrorMessage(true);
      })
      .finally(() => {
        setPreloaderShow(false);
      });
  };

  return (
    <main className="content">
      <SearchForm 
        getInitialMovies={getInitialMovies} 
        shortMovieFilter={shortMovieFilter} 
        onCheckboxChange={handleCheckboxChange}
      />
      <Preloader isShow={isPreloaderShow} />
      {initialMovies.length > 0 ? (
        <MoviesCardList 
          location={location}
          initialMovies={initialMovies}
          savedUserMovies={savedUserMovies}
          onMovieDelete={onMovieDelete}
          onMovieSave={onMovieSave}
        />
      ) : (
        isErrorMessage ? <></> : <NotFoundMovies isErrorMessage={isErrorMessage} />
      )}
    </main>
  );
}

export default Movies;