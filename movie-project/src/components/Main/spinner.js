import React from "react";
import { Spinner } from "react-bootstrap";

export default function MySpinner({ show }) {
  return (
    <Spinner animation="border" role="status" variant="secondary" hidden={show}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
