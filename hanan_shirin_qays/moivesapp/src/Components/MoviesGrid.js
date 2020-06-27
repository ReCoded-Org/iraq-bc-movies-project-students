import React from "react";
import MovieItem from "./MovieItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function MoviesGrid(props) {
  return (
    <Container>
      <Row>{props.movies.map((movie) => MovieItem(movie))}</Row>
    </Container>
    //props.movies.map(movie =>MovieItem(movie))
  );
}
