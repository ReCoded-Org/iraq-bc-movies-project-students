import React from "react";
import { Spinner } from "react-bootstrap";

export default function Spinners(props) {
  return (
    <Spinner
      hidden={props.hidden}
      animation="border"
      variant="primary"
      size="sm"
    />
  );
}
