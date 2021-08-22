import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialMovies } from '../../utils/constants';

function MoviesCardList({ location }) {
  return (
    <section className="elements">  
      {initialMovies.map(movie => {  
        return (  
          <MoviesCard 
            location={location}
            movie={movie} 
            key={movie._id} 
          />  
        )  
      })}
      <button className="elements__movie-button">Ещё</button>
    </section> 
  );
}

export default MoviesCardList;