import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import MoviesGrid from "./MoviesGrid";

function Main(props) {
  const [movies, setMovies] = useState([]);
  const query = props.query;
  const category = props.category;
  useEffect(() => {
    let SEARCH_URL;
    if (query !== "") {
      SEARCH_URL = constructUrl("search/movie", query);
    } else {
      SEARCH_URL = constructUrl("movie/popular");
    }
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.results !== undefined) {
          let movies = data.results;
          console.log(movies);
          console.log(category);

          if (category.id) {
            movies = movies.filter((movie) =>
              movie.genre_ids.includes(category.id)
            );
            console.log(movies);
          }
          props.setIsSpinnerHidden(true);
          setMovies(movies);
        }
      })
      .catch((err) => console.log(err));
  }, [query, category]);

  return (
    <React.Fragment>
      {movies.length > 0 && <MoviesGrid movies={movies} />}
    </React.Fragment>
  );
}

export default Main;
