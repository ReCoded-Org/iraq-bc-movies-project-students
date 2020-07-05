import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import DropdownCategories from "./DropdownCategories";
import { constructUrl } from "./Api";
import { StateContext } from "../StateProvider";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

export default function SearchBox() {
  const [state, dispatch] = useContext(StateContext);

  const history = useHistory();
  const location = useLocation();
  const parts = location.search.split("&");
  const parts2 = `${parts[0]}`.split("=");
  const match = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
  });

  const [category, setCategory] = useState({});

  const changeCategory = (category) => {
    dispatch({ type: "setLoading", payload: true });
    setCategory(category);
  };

  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
    history.push({
      pathname: location.pathname,
      search: "?query=" + e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: "setLoading", payload: true });
    dispatch({ type: "setQuery", payload: query });

    fetchMovies(query);

    if (!match.isExact) {
      history.push({
        pathname: "/search",
        search: "?query=" + query,
        state: {
          query: query,
        },
      });
    }
  };

  useEffect(() => fetchMovies(query), [category]);
  useEffect(() => {
    if (location.search != "") {
      fetchMovies(parts2[1]);
      setQuery(parts2[1]);
    } else {
      fetchMovies();
    }
  }, []);

  function fetchMovies(query = "") {
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
          let movies = data.results;
          if (category.id) {
            movies = movies.filter((movie) => {
              return movie.genre_ids.includes(category.id);
            });
          }
          dispatch({ type: "setMovies", payload: movies });
          dispatch({ type: "setLoading", payload: false });
        }
      })

      .catch((err) => console.log(err));
  }

  return (
    <Form inline onSubmit={onSubmit} style={{ flexFlow: "row" }}>
      <DropdownCategories category={category} setCategory={changeCategory} />

      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={onChange}
      />
      <Button variant="outline-secondary" type="submit">
        Search
        <span>
          {state.isLoading ? (
            <Spinner animation="border" variant="warning" size="sm" />
          ) : (
            " "
          )}
        </span>
      </Button>
    </Form>
  );
}
