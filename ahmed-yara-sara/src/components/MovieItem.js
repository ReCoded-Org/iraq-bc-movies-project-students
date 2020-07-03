import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import "../style.css";
function MovieItem(props) {
  const { title, popularity, release_date } = props;
  const [select, onSelect] = useState("");
  function setMovieId() {
    onSelect(props.id);
  }
  return (
    <>
      <div className="d-flex flex-row justify-content-center mx-auto my-3">
        <Col>
          <a href={`Movie/${props.id}`} style={{ textDecoration: "none" }}>
            <Card
              className="m-auto p-2"
              style={{ width: "300px", color: "black" }}
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
