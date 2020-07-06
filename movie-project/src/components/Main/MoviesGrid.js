import React from "react";
import MovieItem from "./MovieItem";

export default function MoviesGrid({ moviesList }) {
  return (
    <ul
      style={{ listStyle: "none", padding: "0" }}
      className="d-flex align-items-center justify-content-center flex-wrap"
    >
      {moviesList &&
        moviesList.map((movie, index) => (
          <MovieItem key={`${index}`} movie={movie} />
        ))}
    </ul>
  );
}
