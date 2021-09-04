import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ shortMovieFilter, onCheckboxChange }) {
  return (
    <fieldset className="search__form-selector">
      <label className="search__form-label" htmlFor="short-movie">
        <input 
          className="search__form-item-selector" 
          type="checkbox"
          checked={shortMovieFilter}
          onChange={onCheckboxChange}
          name="movie-option" 
          id="short-movie" 
          value="short-movie" />
        <span className="search__form-pseudo-item"></span>
        <span className="search__form-label-text">{shortMovieFilter ? 'Короткометражки' : 'Не короткометражки'}</span>
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;