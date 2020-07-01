import React, {useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { Card, Button, Col,ListGroup } from "react-bootstrap";
import Search from "./Search";


function MovieDetails(props) {
    const {details}=props;
  
     
  return (
    <>
    <card >
        
    <Card.Header> The Name :{details.title}</Card.Header>
    <ListGroup variant="flush">
        <ListGroup.Item>Status : {details.status}</ListGroup.Item>
        <ListGroup.Item>Rate : {details.vote_average}</ListGroup.Item>
        <ListGroup.Item>Movie Duration :{details.runtime} Minute</ListGroup.Item>
        <ListGroup.Item>Release Date : {details.release_date}</ListGroup.Item>
        <ListGroup.Item>Language : {details.original_language}</ListGroup.Item>
        <ListGroup.Item>{details.tagline}</ListGroup.Item>
        <ListGroup.Item>{details.overview}</ListGroup.Item>
        <ListGroup.Item>{details?details.genres.map(genre => genre.name):"error"}</ListGroup.Item>
    </ListGroup>
    </card>
      </>
  );
}

export default MovieDetails;
