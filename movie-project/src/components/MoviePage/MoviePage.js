import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieTrailer from "./trailer";
import MovieInfo from "./MovieInfo";
import "./movie.css";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const [currentMovie, setCurrentMovie] = useState("e");
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/movie/${movieId}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setCurrentMovie(data);
      });
  }, []);

  return (
    <>
      <div className="w-100 movie-page-style">
        <Container className="movie-page-style my-4 mx-0 p-0 w-100">
          <h1 className="text-center my-5" style={{ fontSize: "3rem" }}>
            {currentMovie.title}
          </h1>
          <Row className="w-100">
            <Col
              lg="12"
              className="d-flex flex-column justify-content-center align-items-center p-0"
            >
              <MovieInfo currentMovie={currentMovie} movieId={movieId} />
            </Col>
          </Row>
        </Container>
        <Container className="movie-page-style my-5 mx-auto p-0">
          <Row className="w-100 h-100">
            <Col className="m-auto">
              <MovieTrailer movieId={movieId} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
