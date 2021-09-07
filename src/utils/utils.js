export const filterMovies = (movie, query) => {
  if (movie.nameRU.toString().toLowerCase().includes(query) || 
      (movie.nameEN !== null && movie.nameEN.toString().toLowerCase().includes(query))) {
        return movie;
  }
    return;
}