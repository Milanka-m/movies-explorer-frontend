import { MAIN_API } from './constants';
const { URL } = MAIN_API;

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then(checkResponse)
};

export const authorize = (email, password) => {
  return fetch(`${URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
};

export const getUser = (token) => {
  return fetch(`${URL}/users/me`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
      }
  })
  .then(checkResponse);
}

export const updateUser = (newUserData) => {
  return fetch(`${URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
      },
    body: JSON.stringify({
      name: newUserData.name,
      email: newUserData.email,
    })
  })
  .then(checkResponse);
}

export const getSavedMovies = () => {
  return fetch(`${URL}/movies`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    }
  })
  .then(checkResponse);
}

export const addMoviesCard = (newMovieData) => {
  return fetch(`${URL}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      movieId: newMovieData.movieId,
      country: newMovieData.country,
      director: newMovieData.director,
      duration: newMovieData.duration,
      year: newMovieData.year,
      description: newMovieData.description,
      image: newMovieData.image,
      trailer: newMovieData.trailer,
      thumbnail: newMovieData.thumbnail,
      nameRU: newMovieData.nameRU,
      nameEN: newMovieData.nameEN,
    })
  })
  .then(checkResponse);
}

export const removeMoviesCard = (id) => {
  return fetch(`${URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    }
  })
  .then(checkResponse);
} 
