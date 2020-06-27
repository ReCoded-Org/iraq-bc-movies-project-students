import React from "react";
import Movie from "./Movie";
const MovieGrid = props => {
  return (
    <div className="container">
      <div className="row mt-5">
        {props.movies.map((movie, index) => {
          return (
            <Movie
              image={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              popularity={movie.popularity}
              release_date={movie.release_date}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MovieGrid;
