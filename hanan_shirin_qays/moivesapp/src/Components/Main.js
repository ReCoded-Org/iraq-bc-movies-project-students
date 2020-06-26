import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import RenderMovie from "./RenderMovie";
import { constructUrl } from "./Api";
import { Row, Col } from "react-simple-flex-grid";
import { Navbar, Nav } from "react-bootstrap";
=======
//import RenderMovie from "./RenderMovie";
//import { Form } from "react-bootstrap";
import { constructUrl } from './Api';
import MoviesGrid from "./MoviesGrid";

function Main(props) {
  const query = props.query;
  console.log(query);


  const SEARCH_URL = constructUrl('search/movie', query);


>>>>>>> 894a923fcb327d17b86a935ee31c2119154fa257

function Main(props) {
  const [movies, setMovies] = useState([]);
<<<<<<< HEAD
  const query = props.query;
  const categorie = props.categorie;
=======

>>>>>>> 894a923fcb327d17b86a935ee31c2119154fa257
  useEffect(() => {
    let SEARCH_URL;
    if (query !== "") {
      SEARCH_URL = constructUrl("search/movie", query);
    } else {
      SEARCH_URL = constructUrl("movie/popular");
    }
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
<<<<<<< HEAD
        if (data.results !== undefined) {
          let movies = data.results;
          console.log(movies);
          console.log(categorie);

          if (categorie.id) {
            movies = movies.filter((movie) =>
              movie.genre_ids.includes(categorie.id)
            );
            console.log(movies);
          }
          props.setIsSpinnerHidden(true);
          setMovies(movies);
        }
      })
      .catch((err) => console.log(err));
  }, [query, categorie]);

  return (
    <>
      <Row gutter={40}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <Col span={6} align="middle">
              <RenderMovie
                overview={movie.overview}
                src={
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                }
                key={movie.id}
                title={movie.title}
              />
            </Col>
          ))}
      </Row>
    </>
=======
        if (data.results !== undefined)
          setMovies(data.results);
      }).catch(err => console.log(err));
  }, [query]);

  console.log(movies);
  return (
    <React.Fragment>
      {movies.length > 0 &&
      <MoviesGrid movies={movies}/>}
    </React.Fragment>
>>>>>>> 894a923fcb327d17b86a935ee31c2119154fa257
  );

}

export default Main;
