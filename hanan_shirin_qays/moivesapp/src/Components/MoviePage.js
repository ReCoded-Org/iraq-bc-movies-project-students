import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button, Badge } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function MoviePage(props) {
  const [movie, setMovie] = useState("");
  const [trailers, setTrailers] = useState([]);
  const [actors, setActors] = useState([]);

  let movie_id = props.match.params.id;
  let SEARCH_URL;

  useEffect(async () => {
    SEARCH_URL = constructUrl(`movie/${movie_id}`);
    let res = await fetch(SEARCH_URL);
    let data = await res.json();
    console.log(data);

    setMovie(data);
  }, [movie_id]);

  useEffect(async () => {
    SEARCH_URL = constructUrl(`movie/${movie_id}/videos`);
    let res = await fetch(SEARCH_URL);
    let data = await res.json();
    const videos = [];
    data.results.map((trailer) => {
      videos.push(`https://www.youtube.com/watch?v=${trailer.key}`);
    });
    setTrailers(videos);
  }, [movie_id]);

  useEffect(async () => {
    SEARCH_URL = constructUrl(`movie/${movie_id}/credits`);

    let res = await fetch(SEARCH_URL);
    let data = await res.json();
    let actors = [];
    data.cast.map((actor) => {
      actors.push(actor.name);
    });
    setActors(actors);
  }, [movie_id]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  return (
    <>
      <img
        alt="movieImage"
        src={
          movie.backdrop_path !== null
            ? baseUrl + movie.backdrop_path
            : nullPhoto
        }
      />
      <Button variant="secondary">
        <a
          href="/iraq-bc-movies-project-students/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Back
        </a>
      </Button>

      <h5>{movie.original_title}</h5>
      <h5>{movie.release_date}</h5>
      <h5>{movie.overview}</h5>
      <h5>{movie.vote_average}</h5>

      {movie.genres
        ? movie.genres.map((genre) => {
            return (
              <Badge
                style={{ marginRight: "20px", marginLeft: "10px" }}
                variant="warning"
              >
                {genre.name}
              </Badge>
            );
          })
        : null}

      {actors.map((actor) => {
        return <p style={{ marginLeft: "10px" }}>{actor}</p>;
      })}

      {trailers.map((video, index) => {
        return <ReactPlayer key={`haha-${index}`} url={video} />;
      })}
    </>
  );
}
