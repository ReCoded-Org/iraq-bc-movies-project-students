import React, { useState, useEffect } from "react";
import MoviesGrid from "./MoviesGrid";
import Navbar from "./Navbar";

function MainPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  const handleQuery = (query) => {
    setQuery(query);
  };

  const handleMovies = (movies) => {
    setMovies(movies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <Navbar
        handleQuery={handleQuery}
        handleMovies={handleMovies}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {movies.length > 0 && (
        <MoviesGrid movies={movies} setMovieId={setMovieId} />
      )}
    </React.Fragment>
  );
}

export default MainPage;
