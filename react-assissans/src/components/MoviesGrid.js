import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieItem from "./MovieItem";
function MoviesGrid(props) {
  return (
    <Container className="mt-5">
      <Row>
        {props.movies.map((movies) =>
          movies.map((movie) => (
            <Col lg="6">
              <MovieItem item={movie} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
export default MoviesGrid;
