import React,{useContext} from "react";
import MovieItem from "./MovieItem";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import {StateContext} from "../StateProvider"; 

export default function MoviesGrid(props) {
  const {movies} = useContext(StateContext);

  return (
    <Container>
      <Row md={4} lg={3} xs={12}>
        {movies[0].map((movie) => (
          <Col key={movie.id}>
            <MovieItem movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
