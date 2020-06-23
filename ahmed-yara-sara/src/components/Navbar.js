import React, { Component } from 'react';
import  'react-bootstrap';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar1 extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    console.log("you searched for"+ this.state.value);
    
    event.preventDefault();
  }

 


    render() { 
        return ( 
            <>
            
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info" onClick = {this.handleSubmit}>Search</Button>
                </Form>
              </Navbar>
              <br />
            
            </>);



    }
}
 
export default Navbar1;
