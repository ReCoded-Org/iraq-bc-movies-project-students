import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";

export default function ActorPage(props) {
  let actor_id = props.match.params.actor_id;

  const [person, setPerson] = useState({});
  useEffect(async () => {
    const SEARCH_URL = constructUrl(`person/${actor_id}`);
    let res = await fetch(SEARCH_URL);
    let data = await res.json();
    setPerson(data);
  }, [actor_id]);
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  const profileImage =
    person.profile_path !== null ? baseUrl + person.profile_path : nullPhoto;

  return (
    <div style={{ backgroundColor: "black" }}>
      <Button variant="secondary">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Back
        </Link>
      </Button>
      <Container>
        <Row>
          <div className="col-4">
            <img width="100%" alt="posterImage" src={profileImage} />
          </div>
          <div className="col-8 text-white">
            <h5>{person.name}</h5>

            <h5>{person.birthday}</h5>
            <h5>{person.biography}</h5>
            <h5>{person.place_of_birth}</h5>
          </div>
        </Row>
      </Container>
    </div>
  );
}
