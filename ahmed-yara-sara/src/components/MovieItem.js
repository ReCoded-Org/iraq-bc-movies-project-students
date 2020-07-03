import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";

function MovieItem(props) {
  const { title,popularity, release_date } = props;
  const [select, onSelect] = useState("");
  function setMovieId() {
    onSelect(props.id);
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
              <div className="imageZoom">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
              />
              </div>
              <Card.Body>
                <div>
                  <li>{title}</li>
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
          </Col>
        </ul>
      </a>
    </>
  );
}

export default MovieItem;
