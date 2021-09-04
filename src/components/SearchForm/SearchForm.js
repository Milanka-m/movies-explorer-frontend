import React from 'react';
import './SearchForm.css';
import iconSearch from '../../images/icon-search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ getInitialMovies, shortMovieFilter, onCheckboxChange }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [placeholderMessage, setPlaceHolderMessage] = React.useState(
    'Фильм'
  );
  const [isPlaceholderShow, setPlaceholderShow] = React.useState(false);
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // если строка без пробельных символов равна нулю устанавливаем фокус полю
    if (searchQuery.trim().length === 0) {
      setPlaceHolderMessage('Введите ключевое слово');
      setPlaceholderShow(true);
      inputRef.current.focus();
    } else {
      getInitialMovies(searchQuery);
      // очищаем поле формы при каждом сабмите
      setSearchQuery('');
    }
  };

  const handleChangeSearchInput = (e) => {
    setSearchQuery(e.target.value);
    handleEmptySearchRequest();
  };

  const handleEmptySearchRequest = () => {
    setPlaceholderShow(false);
    setPlaceHolderMessage('Фильм');
  };

  return (
    <section className="search">
      <form 
        onSubmit={handleSubmit} 
        className="search__form" 
        name="movie" 
        action="#"
        noValidate>
        <section className="search__form-section">
          <fieldset className="search__form-input-container">
            <input
              ref={inputRef}
              value={searchQuery}
              onChange={handleChangeSearchInput}
              onBlur={handleEmptySearchRequest}
              className={`search__form-input ${isPlaceholderShow ? 'search__form-input-placeholder' : ''}`} 
              type="text" 
              name="moviename" 
              id="moviename" 
              placeholder={placeholderMessage}
              autoComplete="off"
              required />
          </fieldset>
          <fieldset className="search__form-handlers">
            <button className="search__form-button" type="submit" aria-label="поиск">
              <img className="search__form-icon-search" src={iconSearch} alt="изображение иконки поиска" />
            </button>
          </fieldset>
        </section>
        <FilterCheckbox shortMovieFilter={shortMovieFilter} onCheckboxChange={onCheckboxChange} />
      </form>
    </section>
  );
}

export default SearchForm;