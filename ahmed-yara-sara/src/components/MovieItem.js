import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function MovieItem(props) {
  const { title, popularity, release_date } = props;
  const [select, onSelect] = useState("");
  function setMovieId() {
    onSelect(props.id);
  }
  return (
    <>
      <div className="d-flex justify-content-center mx-auto my-3">
        <Col>
          <a
            href={`Movie/${props.id}`}
            style={{ textDecoration: "none" }}
            className="d-flex justify-content-center"
          >
            <Card
              className="m-auto p-2"
              style={{ width: "400px", color: "black" }}
            >
              <app setMovieId={setMovieId}></app>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              />

              <Card.Body>
                <div>
                  <p>{title}</p>
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <div className="m-auto p-2">
                    <span className="badge badge-warning">
                      Popularity: {popularity}
                    </span>
                  </div>
                  <div className="m-auto p-2">
                    <span className="badge badge-info">
                      Release-Date: {release_date}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </div>
    </>
  );
}

export default MovieItem;
