import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
function navBar() {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="#">Assassins Movies</Navbar.Brand>

        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <SearchBox></SearchBox>
      </Navbar>
    </>
  );
}

function SearchBox() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    moviesData(value);
  };
  return (
    <form className="form-inline my-2" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="search"
        placeholder="Search for a Movie"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
const spinnr = (props) => {
  return (
    <Spinner style={{ display: "none" }} animation="border" role="status">
      <span className="sr-only spin">Loading...</span>
    </Spinner>
  );
};
export default navBar;

function moviesData(Searchquery) {
  fetch(
    `https://api.themoviedb.org/3/search/movie/?api_key=1d54e327869a62aba4dc1b58c2b30233&query=${Searchquery}`
  )
    .then((movies) => movies.json())
    .then((movieData) => console.log(movieData.results));
}
moviesData();
