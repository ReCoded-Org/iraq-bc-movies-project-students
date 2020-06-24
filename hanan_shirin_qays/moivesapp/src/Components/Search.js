import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("A name was submitted: " + event.target.value);
this.onSearch();
  
  }


  onSearch(){
    this.setState({isLoading:true });

  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(this.baseState);
  }
  render() {
    return (   
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
    );
  }
}

export default Search;
