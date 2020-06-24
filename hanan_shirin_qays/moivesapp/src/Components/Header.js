import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl,Spinner } from "react-bootstrap";
import Search from './Search.js';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading:false};
    this.baseState = this.state;
  }


  render() {
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

            {  this.state.isLoading && <Spinner animation="border" variant="primary"/>}

<Search></Search>
        
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
