import React from "react";
import { Navbar } from "react-bootstrap";

export default function navBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#">Movies</Navbar.Brand>
      </Navbar>
    </>
  );
}
