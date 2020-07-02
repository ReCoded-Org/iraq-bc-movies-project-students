import React, { useState, useEffect } from "react";
import Card, { CardBody } from "react-bootstrap/Card";
import Search from "./Search";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "./Image";
import MovieDetails from "./MovieDetails";
import { useHistory } from "react-router";
import Production from "./Production";
import Actors from "./Actors";
export default function MoviePage(props) {
  const history = useHistory();

  function handlegoBack() {
    history.goBack();
  }
  const [movie, setMovie] = useState("");
  let t;
  let movie_id = props.match.params.id;
  console.log(movie_id);
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };

  useEffect(async () => {
    URL = constructUrl(`movie/${movie_id}`);
    let res = await fetch(URL);
    let data = await res.json();
    setMovie(data);
    console.log(data);
    // actors fetch
    let actorURl = constructUrl(`movie/${movie_id}/credits`);
    let result = await fetch(actorURl);
    let actorData = await result.json();
    console.log(actorData);
  }, [movie_id]);

  return (
    <>
      <div className="d-flex flex-column mx-auto align-items-center">
        <Image image={movie.poster_path}></Image>
        <li>
          <a href={movie.homepage}>Go To Movie Page</a>
        </li>

        <MovieDetails details={movie}></MovieDetails>
        <Production details={movie}></Production>

        <div className="navigationButtonsLeft">
          <button onClick={handlegoBack}>Go Back</button>
        </div>
      </div>
    </>
  );
}
