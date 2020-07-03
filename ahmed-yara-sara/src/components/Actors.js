import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function Actors(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const actors = props;
  const actorsNames = Object.values(actors.details);

  return (
    <>
      <Button
        variant="dark"
        onClick={handleShow}
        className="btn btn-dark my-5 mx-5"
      >
        Click to see Cast!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {actorsNames.map((name) => {
              return <li>{name}</li>;
            })}
          </ul>
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
