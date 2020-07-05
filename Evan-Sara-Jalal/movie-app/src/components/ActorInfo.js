import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
function ActorInfo() {
  const params = useParams();
  const history = useHistory();
  const [actorInfo, setActorInfo] = useState({});
  const [image, setImage] = useState({});
  useEffect(() => {
    console.log(history);
    fetchActorInfo();
    fetchImages();
  }, []);

  const fetchActorInfo = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${
        params.actor_id
      }?api_key=801a0cb3e217f703f966a9186ba74310&language=en-US&append_to_response=${
        params.actor_id
      }`
    )
      .then(resp => resp.json())
      .then(resp => setActorInfo(resp));
  };

  const fetchImages = () => {
    fetch(`https://api.themoviedb.org/3/person/${
      params.actor_id
    }/images?api_key=801a0cb3e217f703f966a9186ba74310
    `)
      .then(resp => resp.json())
      .then(resp => setImage(resp.profiles[0]));
  };

  const handleClick = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <Container className="margin-top">
        <Row className="margin-top">
          <Button onClick={handleClick} variant="danger">
            Back
          </Button>{" "}
        </Row>
        <Row>
          <Col lg={6} md={5} xs={12}>
            {actorInfo.id && (
              <Image
                fluid
                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                rounded
              />
            )}
          </Col>
          <Col lg={6} md={5} xs={12}>
            <h2>{actorInfo.name}</h2>
            <hr />
            <h4>Birthdate</h4>
            <p>{actorInfo.birthday}</p>
            <hr />
            <h4>Occupation</h4>
            <p>{actorInfo.known_for_department}</p>
            <hr />
            <h4>Place og birth</h4>
            <p>{actorInfo.place_of_birth}</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ActorInfo;
