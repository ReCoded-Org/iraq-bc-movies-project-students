export function fetchGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`
  ).then(response => response.json());
}

let TMDB_BASE_URL = "https://api.themoviedb.org/3";

const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};

export function fetchQuery(query) {
  let url = constructUrl("search/movie", query);
  return fetch(url).then(response => response.json());
}

export function fetchPopularMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US&page=100`
  ).then(response => response.json());
}

export function fetchActor(castId) {
  return fetch(
    `https://api.themoviedb.org/3/person/${castId}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`
  ).then(response => response.json());
}
