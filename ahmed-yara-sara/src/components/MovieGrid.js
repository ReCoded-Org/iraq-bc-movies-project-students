import React from "react";
import MovieItem from "./MovieItem";

export default function MovieGrid(props) {
  const movies = props.movies;

  return (
    <>
      <div className="row mt-3">
        {movies.map((movie) => (
          <MovieItem
            image={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            popularity={movie.popularity}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </>
  );
}
