import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function movieNavbar(props) {
  // const {handleMovies, handleMovies };
  const handleMovies = props.handleMovies;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movies For You</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Dropdown getMoviesOnChange={handleMovies}></Dropdown>
        <Search getMoviesOnSearch={handleMovies}></Search>
      </Navbar>
      <br />
    </>
  );
}
