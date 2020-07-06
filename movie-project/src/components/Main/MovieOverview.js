import React from "react";
import { Button, Modal, Card } from "react-bootstrap";
import "../App.css";

export default function MovieOverview({
  show,
  handleClose,
  overview,
  title,
  imgUrl
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="movie-overview-modal scale-up-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center movie-overview-modal-body">
        <Card.Img
          variant="top"
          src={imgUrl}
          className="p-3 movie-overview-img"
          style={{ width: "200px" }}
        />
        <div className="movie-overview-text" style={{ padding: "3rem" }}>
          <Card.Text
            className="mb-4 text-primary"
            style={{ fontSize: "1.8rem" }}
          >
            Overview
          </Card.Text>
          <Card.Text>{overview}</Card.Text>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Watch Movie</Button>
      </Modal.Footer>
    </Modal>
  );
}
