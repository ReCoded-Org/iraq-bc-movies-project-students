import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBox from "./SearchBox";

export default function Navbar1(props) {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          React Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav>
          <SearchBox
            handleQuery={props.handleQuery}
            handleMovies={props.handleMovies}
            isLoading={props.isLoading}
            setIsLoading={props.setIsLoading}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
