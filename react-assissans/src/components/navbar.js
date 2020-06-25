import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import Spinner from "./Spinner";

function navBar() {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="#">Assassins Movies</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Spinner />
        <SearchBox />
      </Navbar>
    </>
  );
}
//function onSearch(props) {
// const []
//}
const Search = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  return (
    <div>
      <input type="submit" value="Search" onClick={onClick} />
      {showResults ? <Results /> : null}
    </div>
  );
};

function SearchBox(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(moviesData(value));
  };
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
        onChange={handleChange}
      ></input>
      <button className=" btn btn-primary ml-3" type="submit">
        Search
      </button>
    </form>
  );
}
export default navBar;

function moviesData(Searchquery) {
  fetch(
    `https://api.themoviedb.org/3/search/movie/?api_key=1d54e327869a62aba4dc1b58c2b30233&query=${Searchquery}`
  )
    .then((movies) => movies.json())
    .then((movieData) => console.log(movieData.results));
}
