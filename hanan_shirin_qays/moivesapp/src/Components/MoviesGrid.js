import React from "react";
import MovieItem from "./MovieItem";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

export default function MoviesGrid(props) {
  return (
    <Container>
      <Row lg={3} md={4} xs={12}>
        {props.movies.map(movie => (
          <Col key={movie.id}>
            <MovieItem movie={movie} setMovieId={props.setMovieId} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
