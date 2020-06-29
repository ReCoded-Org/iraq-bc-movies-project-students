import React, { useEffect, useState } from "react";

import { Spinner, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "./Dropdown";
export default function Search(props) {
  const [isSubmitted, submitForm] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [category, setCategory] = useState({});
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const changeCategory = (category) => {
    setCategory(category.id);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(true);
    props.handleQuery(searchValue);
    fetchMoives();
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
    // const URL = constructUrl("search/movie", searchValue);

    let URL;
    if (searchValue !== "") {
      URL = constructUrl("search/movie", searchValue);
    } else {
      URL = constructUrl("movie/popular");
    }
    fetch(URL)
      .then((movies) => movies.json())
      .then((data) => {
        if (category.id) {
          let movies = data.filter((movie) =>
            movie.genre_ids.includes(category.id)
          );
        }
        props.handleMovies(data.results);
      });
  }

  useEffect(() => {
    fetchMoives();
  }, [searchValue]);

  return (
    <Form inline onSubmit={onSubmit}>
      <DropdownMenu
        category={category}
        setCategory={changeCategory}
      ></DropdownMenu>
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
