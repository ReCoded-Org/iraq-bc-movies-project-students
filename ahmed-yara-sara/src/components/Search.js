import React from "react";
import { Spinner, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Search(props) {
  const [isLoading, setLoadingStatus] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    fetchMoives();
  };
  React.useEffect(() => {
    fetchMoives();
  }, [isLoading]);

  function fetchMoives() {
    let URL;
    if (searchValue !== "") {
      URL = constructUrl("search/movie", searchValue);
    } else {
      URL = constructUrl("movie/popular");
    }
    fetch(URL)
      .then((movies) => movies.json())
      .then((data) => {
        props.getMoviesOnSearch(data.results);
        setLoadingStatus(false);
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
        {isLoading ? (
          <Spinner size="sm" animation="border" variant="info" />
        ) : (
          "Search"
        )}
      </Button>
    </Form>
  );
}
