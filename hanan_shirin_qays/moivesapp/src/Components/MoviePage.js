import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button, Badge, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

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
    let actors = data.cast;

    setActors(actors);
  }, [movie_id]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  const moiveImage =
    movie.backdrop_path !== null ? baseUrl + movie.backdrop_path : nullPhoto;
  const posterImage =
    movie.poster_path !== null ? baseUrl + movie.poster_path : nullPhoto;
  return (
    <div
      style={{ backgroundImage: `url(${moiveImage})`, backgroundSize: "cover" }}
    >
      <Button variant="secondary">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Back
        </Link>
      </Button>
      <Container>
        <Row>
          <div className="col-4">
            <img width="100%" alt="posterImage" src={posterImage} />
          </div>
          <div className="col-8 text-white">
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
            <div className=" text-white">
              {actors.slice(0, 9).map((actor) => {
                return (
                  <Link to={`/person/${actor.id}`}>
                    <Badge
                      key={actor.id}
                      style={{ marginLeft: "10px" }}
                      className="align-middle"
                    >
                      <span>
                        <div
                          className="rounded-circle overflow-hidden d-inline-block"
                          height="50px"
                          width="50px"
                        >
                          <img
                            src={baseUrl + actor.profile_path}
                            alt=""
                            height="100%"
                            width="100%"
                            objectFit="cover"
                          />
                        </div>
                        {actor.name}
                      </span>
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
