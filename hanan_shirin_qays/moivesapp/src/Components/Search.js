import React, { Component } from "react";
import { Button, Form, FormControl } from "react-bootstrap";



function Search(props) {
  console.log(props);
  const onChange =props.onChange ;
  return   <Form inline >
  <FormControl
    type="text"
    placeholder="Search"
    className="mr-sm-2"
    onChange={onChange}
  />
  <Button variant="outline-light" type="submit">
    Search
  </Button>
</Form>;
}
// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.baseState = this.state;
//     this.onChange =props.onChange ;
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   handleSubmit(event) { 

//     event.preventDefault();
//     console.log(this);
    
//     console.log(this.state.value);
    
//     this.setState(this.baseState);
//   }
//   render() {
//     return (
//       <Form inline onSubmit={this.handleSubmit}>
//         <FormControl
//           type="text"
//           placeholder="Search"
//           className="mr-sm-2"
//           onChange={this.onChange}
//         />
//         <Button variant="outline-light" type="submit">
//           Search
//         </Button>
//       </Form>
//     );
//   }
// }

export default Search;
