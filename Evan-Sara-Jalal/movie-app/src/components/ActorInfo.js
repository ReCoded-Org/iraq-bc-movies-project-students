import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
function ActorInfo() {
  const params = useParams();
  const [actorInfo, setActorInfo] = useState({});
  useEffect(() => {
    console.log(params);
    //fetchActorInfo();
  }, []);

  const fetchActorInfo = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${
        params.actor_id
      }?api_key=7a757097cf4698b75ed2848485f49571&language=en-US&append_to_response=${
        params.actor_id
      }`
    )
      .then(resp => resp.json())
      .then(resp => setActorInfo(resp));
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg={6} md={5} xs={12}>
            <h1>image goes here</h1>
            <Image src="holder.js/171x180" rounded />
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
      <h1>heyyyy</h1>
    </React.Fragment>
  );
}

export default ActorInfo;
