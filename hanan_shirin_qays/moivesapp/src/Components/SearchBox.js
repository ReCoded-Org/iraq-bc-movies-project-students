import React, { useState,useContext, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Spinners from "./Spinner";
import DropdownCategories from "./DropdownCategories";
import { constructUrl } from "./Api";
import { BrowserRouter, Link } from "react-router-dom";
import { StateContext } from "../StateProvider";

export default function SearchBox(props) {
  const [category, setCategory] = useState({});
  const [state,dispatch] = useContext(StateContext);

  const changeCategory = (category) => {
    console.log(category);
    props.setIsLoading(true);
    setCategory(category);
  };
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.setIsLoading(true);
    props.handleQuery(query);
  };

  useEffect(fetchMovies, [props.isLoading, category]);
  function fetchMovies() {
    // if (!props.isLoading) return;
    let SEARCH_URL;
    if (query !== "") {
      SEARCH_URL = constructUrl("search/movie", query);
    } else {
      SEARCH_URL = constructUrl("movie/popular");
    }
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.results !== undefined) {
          let moviess = data.results;
          if (category.id) {
            moviess = moviess.filter((movie) =>
              movie.genre_ids.includes(category.id)
            );
          }
         const  action={
            type:"setMovies"
          ,
          payload:moviess
          ,
          }
          dispatch(action);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form inline onSubmit={onSubmit}>
      <DropdownCategories category={category} setCategory={changeCategory} />
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={onChange}
      />

      <Button variant="outline-light">
        Search
        <span>
          <Spinners isLoading={props.isLoading} />
        </span>
      </Button>
    </Form>
  );
}
