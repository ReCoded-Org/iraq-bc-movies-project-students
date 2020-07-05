import React from "react";
import { Container, Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <>
      <footer className="bg-dark text-white p-3">
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>
                Grab your popcorn and enjoy your night with
                <span className="text-danger"> Netplex</span>
              </h2>
            </Col>
            <Col lg={6} md={6} xs={12}>
              {" "}
              <nav className="nav flex-column">
                {" "}
                <strong>Founders:</strong>
                <a
                  className="nav-link text-danger"
                  href="https://github.com/evanhameed99"
                  target="_blank"
                >
                  Evan Hameed
                </a>
                <a className="nav-link text-danger" href="#">
                  Sara
                </a>
                <a className="nav-link text-danger" href="#">
                  Jalal
                </a>
              </nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
