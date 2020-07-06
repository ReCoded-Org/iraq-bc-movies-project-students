import React from "react";
import "./movie.css";

export default function MovieImage({ currentMovie }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const imgUrl = imageBaseUrl + currentMovie.poster_path;

  return (
    <div fluid="md" className="movie-page-style w-100">
      <img
        src={imgUrl}
        alt="movie"
        className="mx-auto"
        style={{
          borderRadius: "15px",
          width: "80%",
          height: "auto"
        }}
      />
    </div>
  );
}
