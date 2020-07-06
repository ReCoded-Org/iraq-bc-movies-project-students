import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Jumbotron, Container, Row, Col, Badge } from "react-bootstrap";
import { formatDate } from "../util";
import { fetchActor } from "../API";
import "./actor.css";

export default function ActorPage() {
  const [currentActor, setCurrentActor] = useState();
  const history = useHistory();
  const { castId } = useParams();
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchActor(castId).then(data => {
      setCurrentActor(data);
    });
  }, []);

  return (
    <>
      {currentActor && (
        <Container>
          <Row>
            {currentActor.profile_path && (
              <Col lg="5" className="actor-image-container">
                <img
                  src={imageBaseUrl + currentActor.profile_path}
                  alt="actor"
                  className="actor-image"
                />
              </Col>
            )}
            <Col lg="7" className="actor-info-container m-auto">
              <Jumbotron className="actor-info-container mx-auto my-3 py-5">
                <h1 className="display-3 mb-3 actor-name">
                  {currentActor.name}
                </h1>
                <div className="align-self-md-start">
                  {currentActor.birthday && (
                    <p>
                      Date of birth:{" "}
                      <Badge className="actor-badge" variant="light">
                        {formatDate(currentActor.birthday)}
                      </Badge>
                    </p>
                  )}
                  {currentActor.place_of_birth && (
                    <p>
                      Born in:{" "}
                      <Badge className="actor-badge" variant="light">
                        {currentActor.place_of_birth}
                      </Badge>
                    </p>
                  )}
                  {currentActor.known_for_department && (
                    <p>
                      Known for:{" "}
                      <Badge className="actor-badge" variant="light">
                        {currentActor.known_for_department}
                      </Badge>
                    </p>
                  )}
                </div>
                {currentActor.biography && (
                  <>
                    <h3 className="mb-3">Biography</h3>
                    <p>{currentActor.biography}</p>
                  </>
                )}

                <Button
                  className="mt-3"
                  onClick={() => history.goBack()}
                  variant="light"
                >
                  Go Back To Movie
                </Button>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
