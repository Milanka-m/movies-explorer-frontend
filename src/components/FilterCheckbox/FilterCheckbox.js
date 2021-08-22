import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <fieldset className="search__form-selector">
      <label className="search__form-label" for="short-movie">
        <input className="search__form-item-selector" type="checkbox" name="movie-option" id="short-movie" value="short-movie" />
        <span className="search__form-pseudo-item"></span>
        <span className="search__form-label-text">Короткометражки</span>
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;