// import React, { Component } from "react";
// import {
//   Button,
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   Spinner,
// } from "react-bootstrap";
// import Search from "./Search.js";
// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "", isLoading: false };
//     this.baseState = this.state;
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     console.log(this.state);

//     this.setState({
//       ...this.state,
//       value: event.target.value,
//       isLoading: true,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Navbar bg="dark" expand="lg">
//           <Navbar.Brand href="#home" style={{ color: "white" }}>
//             React App
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-Navbar-nav" />
//           <Navbar.Collapse id="basic-Navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="#home" style={{ color: "white" }}>
//                 Home
//               </Nav.Link>
//             </Nav>

//             {this.state.isLoading && (
//               <Spinner animation="border" variant="primary" />
//             )}

//             <Search onChange={this.handleChange}></Search>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Header;

import React, { useState } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import Spinners from "./Spinner";

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

  // const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  // const constructUrl = (path, query) => {
  //   return `${TMDB_BASE_URL}/${path}?api_key=${atob(
  //     "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  //   )}&query=${query}`;
  // };

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
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              value={inputSearch}
              onChange={onSearch}
            />

            <Button variant="outline-light" type="submit">
              Search
              <span>
                {" "}
                <Spinners hidden={isSpinnerHidden} />
              </span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
