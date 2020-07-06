import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button, Badge, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { useHistory } from "react-router-dom";

export default function MoviePage(props) {
  const history = useHistory();
  const [movie, setMovie] = useState("");
  const [trailers, setTrailers] = useState([]);
  const [actors, setActors] = useState([]);

  let movie_id = props.match.params.id;
  let SEARCH_URL;

  useEffect(() => {
    async function fetchData() {
      // You can await here
      SEARCH_URL = constructUrl(`movie/${movie_id}`);
      let res = await fetch(SEARCH_URL);
      let data = await res.json();

      setMovie(data);

      SEARCH_URL = constructUrl(`movie/${movie_id}/videos`);
      let resVideos = await fetch(SEARCH_URL);
      let dataVideos = await resVideos.json();

      const videos = [];

      dataVideos.results.map((trailer) => {
        videos.push(`https://www.youtube.com/watch?v=${trailer.key}`);
      });

      setTrailers(videos);

      SEARCH_URL = constructUrl(`movie/${movie_id}/credits`);

      let resActors = await fetch(SEARCH_URL);
      let dataActors = await resActors.json();
      let actors = dataActors.cast;

      setActors(actors);
    }
    fetchData();
  }, [movie_id]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  const moiveImage = movie.backdrop_path
    ? baseUrl + movie.backdrop_path
    : nullPhoto;
  const posterImage = movie.poster_path
    ? baseUrl + movie.poster_path
    : nullPhoto;
  return (
    <div
      style={{
        backgroundImage: `url(${moiveImage})`,
        backgroundSize: "cover",
        height: "88vh",
      }}
    >
      <Button variant="secondary" onClick={() => history.goBack()}>
        Back
      </Button>
      {movie.id && (
        <Container>
          <Row>
            <div className="col-4">
              <img width="100%" alt="posterImage" src={posterImage} />
            </div>
            <div className="col-8 text-white">
              <h5>{movie.original_title}</h5>

              <h5>{movie.release_date}</h5>
              <h5>{movie.overview}</h5>
              <h5>{movie.vote_average}</h5>

              {movie.genres
                ? movie.genres.map((genre) => {
                    return (
                      <Badge
                        style={{ marginRight: "20px", marginLeft: "10px" }}
                        variant="warning"
                      >
                        {genre.name}
                      </Badge>
                    );
                  })
                : null}
              <div className=" text-white">
                {actors.slice(0, 9).map((actor) => {
                  return (
                    <Link key={actor.id} to={`/person/${actor.id}`}>
                      <Badge
                        key={actor.id}
                        style={{ marginLeft: "10px" }}
                        className="align-middle"
                      >
                        <span>
                          <div
                            className="rounded-circle overflow-hidden d-inline-block"
                            height="50px"
                            width="50px"
                          >
                            <img
                              src={baseUrl + actor.profile_path}
                              alt=""
                              width="50px"
                              objectfit="cover"
                            />
                          </div>
                          <span>{actor.name}</span>
                        </span>
                      </Badge>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Row>
        </Container>
      )}
      {!movie.id && <Spinner animation="border" variant="warning" size="sm" />}
    </div>
  );
}
