import React from 'react';
import ReactDOM from 'react-dom';
import MovieItem from "./MovieItem";
//import React, { useState } from "react";
//import { Container, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




export default function MoviesGrid(props) {

    return (
        <Container>
            <Row>
                {props.movies.map(movie => MovieItem(movie))}
            </Row>
        </Container>
        //props.movies.map(movie =>MovieItem(movie))

    );

}