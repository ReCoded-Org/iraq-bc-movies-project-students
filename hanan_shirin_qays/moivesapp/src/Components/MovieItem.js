import React from "react";
import Card from "react-bootstrap/Card";

export default function MovieItem(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  return (
    <Card 
    key={props.id}
    style={{ width: "23rem" }}>
      <Card.Img
        variant="top"
        src={
          props.backdrop_path !== null
            ? baseUrl + props.backdrop_path
            : nullPhoto
        }
      />
      <Card.Body>
        <Card.Text>{props.title}</Card.Text>
      </Card.Body>
    </Card>
  );

}
