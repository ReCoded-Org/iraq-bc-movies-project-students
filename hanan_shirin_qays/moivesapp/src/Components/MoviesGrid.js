import React from "react";
import MovieItem from "./MovieItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function MoviesGrid(props) {
  return (
    <Container>
      <Row md={4} lg={4} xs={12}>{props.movies.map((movie) => MovieItem(movie))}</Row>
    </Container>
  );
}
