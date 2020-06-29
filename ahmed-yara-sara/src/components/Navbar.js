import React, { Component } from "react";
import "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar1(props) {
  const { handleQuery, handleMovies } = props;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movies For You</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {/* <Dropdown></Dropdown> */}
        <Search handleQuery={handleQuery} handleMovies={handleMovies}></Search>
      </Navbar>
      <br />
    </>
  );
}
