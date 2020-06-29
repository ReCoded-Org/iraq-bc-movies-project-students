import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import MovieGrid from "./MovieGrid";
function MovieItem(props) {
  const { title, overview, popularity, release_date} = props;
  return (
    <><ul>
      <Col>
        <Card className="m-5 p-2" style={{ width: "300px" }}>
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
    </>
  );
}

export default MovieItem;
