import React, { Component } from "react";
import SearchBox from "./searchBox";
import DropDown from "./dropDown";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link , useHistory} from 'react-router-dom'

function Navigation(props) {
  const history = useHistory()
  const hanleClick = ()=>{
        history.push('/')
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="#home" className="text-danger">
          {props.name}
        </Navbar.Brand>
        <Nav className="mr-auto">
         <Nav.Link onClick={hanleClick} href="#home">Home</Nav.Link>  
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">Series</Nav.Link>
        </Nav>

        <DropDown
          handleGenreChange={props.handleGenreChange}
          genreList={props.genreList}
        />

        <SearchBox
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
        />
      </Navbar>
    </>
  );
}
export default Navigation;