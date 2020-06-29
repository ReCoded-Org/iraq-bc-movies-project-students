import React, { Component } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieItem from "./MovieItem";
export default function MovieGrid(props) {
  const movies = props.movies;
  console.log(movies);

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
