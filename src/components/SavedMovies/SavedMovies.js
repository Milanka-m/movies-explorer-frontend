import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { getSavedMovies } from '../../utils/MainApi';
import NotFoundMovies from '../NotFoundMovies/NotFoundMovies';
import { filterMovies } from '../../utils/utils';

function SavedMovies({loggedIn, location, savedUserMovies, onMovieDelete }) {

  const [initialSavedMovies, setInitialSavedMovies] = React.useState([]);
  const [isPreloaderShow, setPreloaderShow] = React.useState(false);
  const [isErrorMessage, setIsErrorMessage] = React.useState(false);
  const [shortMovieFilter, setShortMovieFilter] = React.useState(false);

  const handleCheckboxChange = () => {
    setShortMovieFilter(!shortMovieFilter);
  }

  function getInitialSavedMovies(query) {
    setInitialSavedMovies([]);
    setPreloaderShow(true);
    setIsErrorMessage(false);
    if (loggedIn) {
      getSavedMovies()
      .then((movies) => {
        const savedMoviesCards = movies.filter(movie => filterMovies(movie, query));
        setInitialSavedMovies(!shortMovieFilter 
          ? savedMoviesCards 
          : savedMoviesCards.filter(savedMovieCard => savedMovieCard.duration <= 40));
        setShortMovieFilter(false);
      })
      .catch((err) => {
        console.log(err);
        setIsErrorMessage(true);
      })
      .finally(() => {
        setPreloaderShow(false);
      });
    }
    
  };

  return (
    <main className="content">
      <SearchForm 
        getInitialMovies={getInitialSavedMovies} 
        shortMovieFilter={shortMovieFilter} 
        onCheckboxChange={handleCheckboxChange}
      />
      <Preloader isShow={isPreloaderShow}/>
      {savedUserMovies.length > 0 ? (
        <MoviesCardList 
          location={location}
          initialMovies={initialSavedMovies.length > 0 ? initialSavedMovies : savedUserMovies}
          savedUserMovies={savedUserMovies}
          onMovieDelete={onMovieDelete}
      />
      ) : (
        isErrorMessage ? <NotFoundMovies isErrorMessage={isErrorMessage} /> : <></>
      )} 
    </main>
  );
}

export default SavedMovies;