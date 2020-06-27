import React, { useState, useEffect } from "react";
import RenderMovie from "./RenderMovie";
import { constructUrl } from "./Api";
import { Row, Col } from "react-simple-flex-grid";
import { Navbar, Nav } from "react-bootstrap";
import MoviesGrid from './MoviesGrid'

function Main(props) {
  const [movies, setMovies] = useState([]);
  const query = props.query;
  const categorie = props.categorie;
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
          console.log(categorie);

          if (categorie.id) {
            movies = movies.filter((movie) =>
              movie.genre_ids.includes(categorie.id)
            );
            console.log(movies);
          }
          props.setIsSpinnerHidden(true);
          setMovies(movies);
        }
      })
      .catch((err) => console.log(err));
  }, [query, categorie]);

  return (
    <React.Fragment>
      {movies.length > 0 && <MoviesGrid movies={movies} />}
    </React.Fragment>
  );

}

export default Main;
