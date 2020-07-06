import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import MovieCast from "./cast";
import MovieImage from "./image";
import MovieGenre from "./movieGenre";
import { formatDate } from "../util";
import "./movie.css";

export default function MovieInfo({ currentMovie, movieId }) {
  return (
    <>
      <Row className="w-100">
        <Col lg="4" className="movie-page-style">
          <MovieImage currentMovie={currentMovie} />
        </Col>

        <Col
          lg="4"
          className="movie-page-style"
          style={{ justifyContent: "space-around" }}
        >
          <h3
            className="text-center display-3 my-3"
            style={{ fontSize: "3rem" }}
          >
            Overview:
          </h3>
          <p>{currentMovie.overview}</p>
          <div>
            <Badge variant="primary" style={{ fontSize: "0.85rem" }}>
              {formatDate(currentMovie.release_date)}
            </Badge>
            <Badge
              variant="warning"
              className="ml-2"
              style={{ fontSize: "0.85rem" }}
            >
              Rating :{currentMovie.vote_average}
            </Badge>
          </div>
          <MovieGenre currentMovie={currentMovie} />
        </Col>

        <Col
          lg="4"
          className="movie-page-style mx-auto"
          style={{ width: "450px" }}
        >
          <h3
            className="text-center display-3 m-0 mt-3"
            style={{ fontSize: "3rem" }}
          >
            Cast
          </h3>
          <MovieCast movieId={movieId} />
        </Col>
      </Row>
    </>
  );
}
