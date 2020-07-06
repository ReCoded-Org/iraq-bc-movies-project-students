import React from "react";
import { Card } from "react-bootstrap";

export default function Image(props) {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500${props.moviesData.poster_path}`}
          alt="Movie image"
        />
        <Card.ImgOverlay>
          <Card.Title>{props.moviesData.original_title}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
