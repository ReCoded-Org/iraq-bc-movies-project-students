import React, { useState, useEffect } from "react";
import Image from "./Image";
import MovieDetails from "./MovieDetails";
import { useHistory } from "react-router";
import Production from "./Production";
import Actors from "./Actors";
import ReactPlayer from "react-player";
export default function MoviePage(props) {
  const history = useHistory();

  function handlegoBack() {
    history.goBack();
  }
  const [movie, setMovie] = useState("");
  const [actors, setCast] = useState("");
  const [trailers, setTrailer] = useState("");
  let movie_id = props.match.params.id;
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };

  useEffect(async () => {
    URL = constructUrl(`movie/${movie_id}`);
    let res = await fetch(URL);
    let movieData = await res.json();
    setMovie(movieData);
    // actors fetch
    let actorURl = constructUrl(`movie/${movie_id}/credits`);
    let result = await fetch(actorURl);
    let actorData = await result.json();
    console.log(actorData);
    let actors = [];
    actorData.cast.map((actor) => {
      actors.push(actor.name);
    });
    setCast(actors);
    //movieTrailer
    let trailerURL = constructUrl(`movie/${movie_id}/videos`);
    let response = await fetch(trailerURL);
    let trailerData = await response.json();
    const videos = [];
    trailerData.results.map((trailer) => {
      videos.push(`https://www.youtube.com/watch?v=${trailer.key}`);
    });
    setTrailer(videos);
    console.log(videos);
  }, [movie_id]);

  return (
    <>
      <div className="d-flex flex-column mx-auto align-items-center">
        <div>
          <Image image={movie.poster_path}></Image>
        </div>
        <ul>
          {Object.values(trailers).map((url) => {
            return (
              <ReactPlayer
                url={url}
                frameborder="0"
                className="mt-5"
                allowfullscreen
              ></ReactPlayer>
            );
          })}
        </ul>
        <a
          href={movie.homepage}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h4> Go To Movie Page</h4>
        </a>
        <MovieDetails details={movie}></MovieDetails>
        <Actors details={actors}></Actors>
        <Production details={movie}></Production>
      </div>
      <div className="navigationButtonsLeft">
        <button onClick={handlegoBack} className="btn btn-danger my-4 mx-4">
          Go Back
        </button>
      </div>
    </>
  );
}
