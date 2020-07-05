import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import ViewDetail from "./viewDetail";
import { Link } from "react-router-dom";
function Movie(props) {
  return (
    <Col lg={4} md={6} xs={12}>
      <Card className="m-3 scale" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.image}`}
          alt="not working"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Link to={`/${props.id}`}>
            <Button variant="danger">View Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Movie;
