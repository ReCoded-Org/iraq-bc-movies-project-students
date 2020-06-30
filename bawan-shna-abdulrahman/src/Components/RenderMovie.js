import React, { useState } from "react";

import { Modal, Button, Card, CardTitle, CardText } from "react-bootstrap";

export default function RenderMovie(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ marginTop: "50px" }}>
      <Card
        title={props.title}
        style={{ width: "300px", margin: "10px" }}
        onClick={() => {
          props.setMovieId(props.id);
          console.log(props.movieId);
        }}
      >
        <Card.Img variant="top" src={props.src} />

        <Card.Body>
          <Card.Title>
            {`${props.title}`.substr(0, 25)}
            {props.title.length >= 25 ? "..." : ""}
          </Card.Title>

          <Button
            variant="warning"
            onClick={handleShow}
            style={{ marginTop: "10px" }}
          >
            Overview
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>OverView</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{props.overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}
