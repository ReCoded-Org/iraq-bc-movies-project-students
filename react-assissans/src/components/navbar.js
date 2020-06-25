import { Navbar, Nav, Spinner } from "react-bootstrap";
import React, { useState } from "react";
const moviesUrl =
  "https://api.themoviedb.org/3/search/movie/?api_key=1d54e327869a62aba4dc1b58c2b30233";

function navBar() {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="#">Assassins Movies</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <SearchBox />
      </Navbar>
    </>
  );
}

function SearchBox() {
  const [value, setValue] = useState("");
  let [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setLoading(true);

    setValue(event.target.value);
    fetch(`${moviesUrl}&query=${value}`)
      .then((movies) => movies.json())
      .then((movieData) => {
        setLoading(false);
        console.log(movieData.results);
      });
  };
  const handleSubmit = (event) => {
    setLoading(true);
    fetch(`${moviesUrl}&query=${value}`)
      .then((movies) => movies.json())
      .then((movieData) => {
        setLoading(false);
        console.log(movieData.results);
      });
    event.preventDefault();
  };
  return (
    <>
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
      {loading && <Loading />}
    </>
  );
}
//function OnSearch() {
//return <Loading value="inline-block" />;
//}
const Loading = (props) => {
  console.log(props.value);
  return (
    <Spinner animation="grow" role="status" variant="warning" className="ml-4">
      <span className="sr-only spin ">Loading...</span>
    </Spinner>
  );
};
export default navBar;
