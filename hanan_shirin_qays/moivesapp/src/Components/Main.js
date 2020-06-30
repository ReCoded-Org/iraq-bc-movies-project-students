import React, { useState, useEffect } from "react";
import MoviesGrid from "./MoviesGrid";
import Navbar from "./Navbar";

function Main(props) {
  const query = props.query;
  const movies = props.movies;

  const handleQuery = (query) => {
    setQuery(query);
  };

  const handleMovies = (movies) => {
    setMovies(movies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      {movies.length > 0 && <MoviesGrid movies={movies} />}
    </React.Fragment>
  );
}

export default Main;
