import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";

export default function Header() {
  const [isSpinnerHidden, setIsSpinnerHidden] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const onSearch = (e) => {
    setInputSearch(e.target.value);
    setIsSpinnerHidden(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${inputSearch}`);
    setIsSpinnerHidden(true);
    setInputSearch("");
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav>

          <Search
            onSubmit={handleSubmit}
            onChange={onSearch}
            hidden={isSpinnerHidden}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
