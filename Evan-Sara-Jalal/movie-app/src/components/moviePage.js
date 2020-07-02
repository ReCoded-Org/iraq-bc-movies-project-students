import React from "react";

import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ResponsiveEmbed
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from "react-router-dom";
//import "./dropDown";
function MoviePage() {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    console.log(location);

    fetchMovie();
    fetchVideos();
    fetchCredits();
  }, []);

  const fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.id
      }?api_key=5ed852ecd6e3943b0c7b922a448cbc9a&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => setMovie(resp));
  };

  const fetchVideos = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.id
      }/videos?api_key=5ed852ecd6e3943b0c7b922a448cbc9a&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => setTrailers(resp.results));
  };

  const fetchCredits = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.id
      }/credits?api_key=5ed852ecd6e3943b0c7b922a448cbc9a`
    )
      .then(resp => resp.json())
      .then(resp => {
        setCast(resp.cast);
      });
  };

  // console.log(movieGenre)
  return (
    <>
      <Container className="margin-top">
        <Row className="margin-top">
          <Link to="/">
            {" "}
            <Button variant="danger">Back</Button>{" "}
          </Link>
        </Row>
        <Row>
          <Col lg={6} md={5} xs={12}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              rounded
              fluid
            />
          </Col>
          <Col lg={6} md={5} xs={12}>
            <h1>{movie.original_title}</h1>

            <h2> Movie overview</h2>
            {movie.overview}
            <hr />
            <h2> Movie Popularity</h2>
            {movie.popularity}
            <hr />
            <h2> Status</h2>
            {movie.status}
            <hr />
            <h2> Genres</h2>
            <hr />

            {movie.id &&
              movie.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            <hr />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2> Trailers</h2>
            <hr />
            {movie.id&&trailers.map(trailer => {
              return (
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                  <iframe
                    class="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    allowFullScreen
                    key={trailer.id}
                  />
                </div>
              );
            })}
          </Col>
          {/* src={`https://www.youtube.com/embed/${trailer.key}`} */}
        </Row>
        <br />

        <br />
        <Row>
          <Col className="mb-4">
            <h2>Actors</h2>
            <hr />
            {movie.id &&
              cast.map(actor => {
                return (
                  <h4 style={{ color: "#333" }}>
          <Link to={`/person/${actor.id}`}>        {actor.name} ({actor.character})</Link>  
                  </h4>
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MoviePage;
