import React, { useState, useEffect } from "react";
import MoviesGrid from "./MoviesGrid";

function Main(props) {
  const query = props.query;
  const movies = props.movies;

  console.log(query);

  return (
    <React.Fragment>
      { movies.length > 0 && <MoviesGrid movies={movies} setMovieId={props.setMovieId} />}
    </React.Fragment>
  );
}

export default Main;
