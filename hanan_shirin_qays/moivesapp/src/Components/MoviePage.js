import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button } from "react-bootstrap";
import MoviesGrid from "./MoviesGrid";

export default function MoviePage(props) {
  const [movie, setMovie] = useState("");
  let SEARCH_URL;
  let movie_id = props.movieId;

  useEffect(async () => {
    SEARCH_URL = constructUrl(`movie/${movie_id}`);

    let res = await fetch(SEARCH_URL);
    let data = await res.json();
    setMovie(data);
  }, [movie_id]);

  return (
    <>
      <Button variant="secondary">
        <a href="./MoviesGrid.js" style={{ color: "white" }}>
          Go Back
        </a>
      </Button>

      {movie.original_title}
    </>
  );
}
