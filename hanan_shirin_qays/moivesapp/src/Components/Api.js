


const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = "542003918769df50083a13c415bbc602";
// const SEARCH_URL = TMDB_BASE_URL + `search/movie?${API_KEY}&query=${query}`;
// https://api.themoviedb.org/3/search/movie?api_key=542003918769df50083a13c415bbc602&query=batman
// https://api.themoviedb.org/3/search/movie?api_key=542003918769df50083a13c415bbc602&query=superman&page=1&include_adult=false
// const constructUrl = (path, query) => {
//   return `${TMDB_BASE_URL}/${path}?api_key=542003918769df50083a13c415bbc602&query=${query}`;
// };

export function constructUrl (path, query) {
  return `${TMDB_BASE_URL}/${path}?api_key=${API_KEY}&query=${query}`;};


  