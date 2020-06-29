import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fa } from "@fortawesome/fontawesome-free";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

class FooterBar extends Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top bg-dark page-footer">
        <div className="text-center text-light">
          
          <h3>This Website was made by</h3>
        </div>
        <br></br>
        <br></br>
        <div className="container ">
          <div className="row">
            <div className="col-6 col-md-4 ">
              <h5 className="text-center text-light">Ahmed Al-kheerow</h5>
              <p className="text-center text-primary">
                Nice and very energized guy, you can always see his smile
              </p>

              <ul className="pagination align-center justify-content-center">
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://github.com/ahmed-alkheerow"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faGithubSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://www.facebook.com/ahmed.a.alkheerow/"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://www.instagram.com/ahmed.alkheerow/"
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="https://twitter.com/alkheerow">
                    <FontAwesomeIcon icon={faTwitterSquare} />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <h5 className="text-center text-light">Yara Alkassar</h5>
              <p className="text-center text-primary">
                Smart as well as very passionate girl about learning and very
                optimistic{" "}
              </p>
              <ul className="pagination align-center justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <FontAwesomeIcon icon={faGithubSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <FontAwesomeIcon icon={faFacebookSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <FontAwesomeIcon icon={faInstagramSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <FontAwesomeIcon icon={faTwitterSquare} />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <h5 className="text-center text-light">Sara Mohammed</h5>
              <p className="text-center text-primary">
                Very calm and kind hearted girl with big vision for the future{" "}
              </p>
              <ul className="pagination align-center justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">
                    {" "}
                    <FontAwesomeIcon icon={faGithubSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <FontAwesomeIcon icon={faFacebookSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <FontAwesomeIcon icon={faInstagramSquare} />{" "}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <FontAwesomeIcon icon={faTwitterSquare} />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterBar;
