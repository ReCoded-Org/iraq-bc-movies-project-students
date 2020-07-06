import React from "react";
import { MdMovieFilter } from "react-icons/md";
import SearchBox from "./searchBox";
import { Navbar, Nav } from "react-bootstrap";
import GenreSelector from "./genres";
import { Link } from "react-router-dom";
export default function MyNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ boxShadow: "0px 3px 3px -1px rgba(240,240,240,1)" }}
      >
        <Navbar.Brand href="#home">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="m-2 mr-3">
              <MdMovieFilter size="2.5rem" className="text-primary mb-1" />
              <span
                className="text-info display-3 text-dark"
                style={{ fontSize: "1.7rem" }}
              >
                {" "}
                Cinemagic
              </span>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <GenreSelector />
          </Nav>
          <SearchBox />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
