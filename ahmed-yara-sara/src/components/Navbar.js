import React, { Component } from "react";
import "react-bootstrap";
import {
  Spinner,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";




export default function Navbar1() {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: "", loading: false };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  
  const [isSubmitted, submitForm] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (event)  =>{
    setSearchValue( event.target.value );
  }

  // const handleSubmit = (event) => {
    

  //   event.preventDefault();
  // }

    return (
  

      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link> 
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline 
            onSubmit={e => {
              e.preventDefault();
              submitForm(true);
              console.log("you searched for " + searchValue);
            }}>
            <FormControl
              type="text"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-info" type ="submit">
            {!isSubmitted && "Search"}
            {isSubmitted && <Spinner animation="border" variant="info" />}
            </Button>
            
          </Form>
        </Navbar>
        <br />
      </>
    );
  
          }