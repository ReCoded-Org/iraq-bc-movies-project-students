import React, { Component } from "react";
import "react-bootstrap";
import { Spinner, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search(props) {
  const [isSubmitted, submitForm] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(true);
    props.handleQuery(searchValue);
    fetchMoives();
    console.log("you searched for " + searchValue);
  };
  React.useEffect(() => {
    if (isSubmitted)
      setTimeout(() => {
        submitForm(false);
      }, 3000);
  }, [isSubmitted]);

  function fetchMoives() {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const constructUrl = (path, query) => {
      return `${TMDB_BASE_URL}/${path}?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}&query=${query}`;
    };
    const URL = constructUrl("search/movie", searchValue);

    fetch(URL)
      .then((movies) => movies.json())
      .then((data) => {
        console.log(data);
        props.handleMovies(data.results);
        //  setMovies(movies.results)
      });
  }

  return (
    <Form inline onSubmit={onSubmit}>
      <FormControl
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-info" type="submit">
        {!isSubmitted && "Search"}
        {isSubmitted && <Spinner size="sm" animation="border" variant="info" />}
      </Button>
    </Form>
  );
}
