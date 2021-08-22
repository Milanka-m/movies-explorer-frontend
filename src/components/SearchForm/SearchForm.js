import React from 'react';
import './SearchForm.css';
import iconSearch from '../../images/icon-search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section class="search">
      <form className="search__form" name="movie" novalidate>
        <section className="search__form-section">
          <fieldset className="search__form-input-container">
            <input className="search__form-input" type="text" name="moviename" id="moviename" placeholder="Фильм" required />
          </fieldset>
          <fieldset className="search__form-handlers">
            <button className="search__form-button" type="submit" aria-label="поиск">
              <img className="search__form-icon-search" src={iconSearch} alt="изображение иконки поиска" />
            </button>
          </fieldset>
        </section>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;