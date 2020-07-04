import React from "react";

import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ResponsiveEmbed,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from "react-router-dom";

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
    console.log(history);

    fetchMovie();
    fetchVideos();
    fetchCredits();
  }, []);

  const fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=7a757097cf4698b75ed2848485f49571&language=en-US`
    )
      .then((resp) => resp.json())
      .then((resp) => setMovie(resp));
  };

  const fetchVideos = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=7a757097cf4698b75ed2848485f49571&language=en-US`
    )
      .then((resp) => resp.json())
      .then((resp) => setTrailers(resp.results));
  };

  const fetchCredits = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=7a757097cf4698b75ed2848485f49571`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setCast(resp.cast);
      });
  };

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
              movie.genres.map((genre) => {
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
            {movie.id &&
              trailers.map((trailer) => {
                return (
                  <div className="embed-responsive embed-responsive-16by9 mb-4">
                    <iframe
                      className="embed-responsive-item"
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      allowFullScreen
                      key={trailer.id}
                    />
                  </div>
                );
              })}
          </Col>
        </Row>
        <br />

        <br />
        <Row>
          <Col className="mb-4">
            <h2>Actors</h2>
            <hr />
            {movie.id &&
              cast.map((actor) => {
                return (
                  <h4>
                    <Link to={`/person/${actor.id}`}>
                      {" "}
                      {actor.name} ({actor.character})
                    </Link>
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
