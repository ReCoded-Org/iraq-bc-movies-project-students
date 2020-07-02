import React from "react";
import { Card, Badge } from "react-bootstrap";

function MovieItem(props) {
  const { item } = props;
  const img = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
  console.log(item);
  return (
    <div>
      <Card style={{ width: "20rem", hieght: "10rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.overview}</Card.Text>
          <Card.Text>
            <Badge variant="success">{item.vote_average}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default MovieItem;
