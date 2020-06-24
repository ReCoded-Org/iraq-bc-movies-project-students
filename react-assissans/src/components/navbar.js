import { Navbar, Nav } from "react-bootstrap";
import React, { Component } from "react";
class navBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSearch: "",
    };
  }
  handleMovieSearch = (event) => {
    this.setState({
      movieSearch: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    moviesData(this.state.movieSearch);
  };
  render() {
    return (
      <>
        <Navbar bg="dark">
          <Navbar.Brand href="#">Assassins Movies</Navbar.Brand>

          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <form className="form-inline my-2" onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="search"
              placeholder="Search for a Movie"
              value={this.state.movieSearch}
              onChange={this.handleMovieSearch}
            ></input>
            <button type="submit">Search</button>
          </form>
        </Navbar>
      </>
    );
  }
}
//function SearchBox() {
// return <></>;
//}
export default navBar;

function moviesData(Searchquery) {
  fetch(
    `https://api.themoviedb.org/3/search/movie/?api_key=1d54e327869a62aba4dc1b58c2b30233&query=${Searchquery}`
  )
    .then((movies) => movies.json())
    .then((movieData) => console.log(movieData));
}
moviesData();
