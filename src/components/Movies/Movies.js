import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ location }) {
  return (
    <main class="content">
      <SearchForm />
      <Preloader />
      <MoviesCardList 
        location={location}
      />
    </main>
  );
}

export default Movies;