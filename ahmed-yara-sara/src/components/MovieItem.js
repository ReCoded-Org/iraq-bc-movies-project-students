import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function MovieItem(props) {
  const { title, overview, popularity, release_date } = props;
  const [select, onSelect] = useState("");
  let randColor = [
    "primary",
    "secondary",
    "danger",
    "warning",
    "success",
    "dark",
    "info",
  ];
  function setMovieId() {
    onSelect(props.id);
    console.log(props.id);
  }
  return (
    <>
      <a
        href={`Movie/${props.id}`}
        style={{ textDecoration: "none" }}
        className="d-flex justify-content-center"
      >
        <ul style={{ listStyleType: "none" }}>
          <Col>
            <Card
              className="m-auto p-2"
              style={{ width: "400px", color: "black" }}
              onClick={setMovieId}
            >
              <app setMovieId={setMovieId}></app>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              />
              <Card.Body>
                <li>{title}</li>
                <div>
                  <span className="badge badge-warning">
                    Popularity: {popularity}
                  </span>
                </div>
                <div>
                  <span className="badge badge-info">
                    Release-Date: {release_date}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </ul>
      </a>
    </>
  );
}

export default MovieItem;
