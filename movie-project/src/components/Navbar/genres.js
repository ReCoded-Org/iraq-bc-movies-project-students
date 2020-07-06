import { Form, Nav } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../StateProvider";
import { fetchPopularMovies } from "../API";
import { useHistory } from "react-router-dom";

export default function GenreSelector() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [state, dispatch] = useContext(MovieContext);
  const history = useHistory();

  useEffect(() => {
    fetchPopularMovies().then(data => {
      dispatch({ type: "SET_MOVIES", moviesList: data.results });
      setPopularMovies(data.results);
    });
  }, []);

  return (
    <Nav className="mr-auto mb-0">
      <Form.Group className="mb-0" controlId="exampleForm.ControlSelect1">
        <Form.Control
          as="select"
          onChange={e => {
            history.push("/");
            let selectedGenre = Number(e.target.value);
            if (selectedGenre !== 0) {
              const filteredMovies = popularMovies.filter(movie =>
                movie.genre_ids.includes(selectedGenre)
              );
              dispatch({ type: "SET_MOVIES", moviesList: filteredMovies });
            } else {
              dispatch({ type: "SET_MOVIES", moviesList: popularMovies });
            }
          }}
        >
          <option key={0} value={0}>
            All genres
          </option>
          {state.genresList &&
            state.genresList.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
        </Form.Control>
      </Form.Group>
    </Nav>
  );
}
