import React, { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
function ViewDetail(props) {
  const [show, setShow] = useState();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        View Detail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {props.overview}</p>
          <hr />
          <p>Rlease date : {props.release_date}</p>
          <p>Popularity : {props.popularity}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewDetail;
