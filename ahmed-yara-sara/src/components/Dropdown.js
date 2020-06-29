import React, { Component } from "react";
import "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
export default function DropdownMenu(props) {
  const [genreId, setGenreId] = useState();
  const [Genres, setGenres] = useState([]);

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };
  useEffect(() => {
    const URL = constructUrl("genre/movie/list");
    fetch(URL)
      .then((genre) => genre.json())
      .then((data) => {
        if (data.genres !== undefined)
          setGenres([{ id: 0, name: "All Genres" }, ...data.genres]);
      });
  });
  const handleChange = (e) => {
    const parseId = +e.target.value;
    const trendingURL = constructUrl("trending/all/day");
    fetch(trendingURL)
      .then((genre) => genre.json())
      .then((data) => {
        console.log(data);
        props.getMoviesOnChange(
          data.results.filter((movie) => {
            return movie.genre_ids.includes(parseId);
          })
        );
      });
  };

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom" className="mr-2 mt-3">
          <Form.Control as="select" custom onChange={handleChange}>
            {Genres.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
