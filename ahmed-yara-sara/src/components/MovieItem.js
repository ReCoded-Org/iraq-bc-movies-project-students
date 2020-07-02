import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function MovieItem(props) {
  const { title, overview, popularity, release_date } = props;
  const [select, onSelect] = useState("");
  function setMovieId() {
    onSelect(props.id);
    console.log(props.id);
  }
  return (
    <>
      <a href={`Movie/${props.id}`}>
        <ul>
          <Col>
            <Card
              className="m-5 p-2"
              style={{ width: "300px" }}
              onClick={setMovieId}
            >
              <app setMovieId={setMovieId}></app>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              />
              <Card.Body>
                <li>{title}</li>
                <li>{overview}</li>
                <li>{popularity}</li>
                <li>{release_date}</li>
              </Card.Body>
            </Card>
          </Col>
        </ul>
      </a>
    </>
  );
}

export default MovieItem;
