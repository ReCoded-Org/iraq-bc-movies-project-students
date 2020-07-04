import React,{useContext} from "react";
import MovieItem from "./MovieItem";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import {StateProvider} from "../StateProvider"; 

export default function MoviesGrid(props) {
  const {movies} = useContext(StateProvider);

  return (
    <Container>
      <Row md={4} lg={3} xs={12}>
        {movies.movies.map((movie) => (
          <Col key={movie.id}>
            <MovieItem movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
