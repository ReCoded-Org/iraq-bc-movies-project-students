import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function Myfooter() {
  return (
    <div className="py-3" style={footer}>
      <Container>
        <Row className="mb-3">
          <Col className="text-dark">
            Made with <FaHeart /> by :
          </Col>
        </Row>
        <Row>
          <Col className="text-dark">
            <a
              className="m-2 text-dark"
              href="https://github.com/Hewr-Srood"
              style={link}
            >
              <FaGithub /> Hewr
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/neven2"
              style={link}
            >
              <FaGithub /> Neven
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/Arvinalhissou"
              style={link}
            >
              <FaGithub /> Arvin
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/vazhin"
              style={link}
            >
              <FaGithub /> Vazhin
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/Zainab98Azzam"
              style={link}
            >
              <FaGithub /> Zainab
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const footer = {
  backgroundColor: "#F0F0F0",
  fontSize: "0.82rem",
  textAlign: "center",
  width: "100%"
};

const link = {
  color: "#34495E ",
  textDecoration: "none"
};
