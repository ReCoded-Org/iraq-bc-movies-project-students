import React, { Component } from "react";
import "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Search/>

      </Navbar>
      <br />
    </>
  );
}
