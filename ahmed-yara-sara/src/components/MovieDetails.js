import React from "react";
import { Card, ListGroup } from "react-bootstrap";


function MovieDetails(props) {
  const { details } = props;
  function time_convert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return hours + "h " + minutes + "m";
  }
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.toUpperCase();
  };
  return (
    <>
      <card>
        <Card.Header> The Name: {details.title}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Status: {details.status}</ListGroup.Item>
          <ListGroup.Item>Rate: {details.vote_average}/10</ListGroup.Item>
          <ListGroup.Item>
            Movie Duration: {time_convert(details.runtime)}
          </ListGroup.Item>
          <ListGroup.Item>Release Date: {details.release_date}</ListGroup.Item>
          <ListGroup.Item>
            Language: {capitalize(details.original_language)}
          </ListGroup.Item>
          <ListGroup.Item>Tagline: {details.tagline}</ListGroup.Item>
          <ListGroup.Item>Description: {details.overview} </ListGroup.Item>
          <ListGroup.Item>
            Genres:
            {details
              ? details.genres.map((genre) => " " + genre.name + " ")
              : "Not Defined"}
          </ListGroup.Item>
        </ListGroup>
      </card>
    </>
  );
}

export default MovieDetails;
