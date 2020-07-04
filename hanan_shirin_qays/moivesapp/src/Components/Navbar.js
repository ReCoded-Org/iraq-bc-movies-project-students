import React from "react";
import { Navbar as NavBarBootstarp, Nav } from "react-bootstrap";
import SearchBox from "./SearchBox";

export default function Navbar(props) {
  return (
      <NavBarBootstarp bg="dark" expand="lg">
        <NavBarBootstarp.Brand
          href="/"
          style={{ color: "white" }}
        >
          React Movies App
        </NavBarBootstarp.Brand>
        <NavBarBootstarp.Toggle aria-controls="basic-Navbar-nav" />
        <NavBarBootstarp.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="/"
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
          </Nav>
          <SearchBox
            handleQuery={props.handleQuery}
            handleMovies={props.handleMovies}
            isLoading={props.isLoading}
            setIsLoading={props.setIsLoading}
          />
        </NavBarBootstarp.Collapse>
      </NavBarBootstarp>
  );
}
