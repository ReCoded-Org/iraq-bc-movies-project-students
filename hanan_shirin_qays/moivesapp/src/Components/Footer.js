import React from "react";
import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="main-footer">
      <small style={{ marginRight: "20px" }}>Developed by </small>-
      <a href="https://github.com/7ananDlshad" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <small style={{ marginRight: "20px" }}>Hanan</small>-
      <a href="https://github.com/QaysAyad" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <small style={{ marginRight: "20px" }}>Qays</small>-
      <a href="https://github.com/shirin-muataz" style={{ color: "white" }}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <small style={{ marginRight: "20px" }}>Shirin</small>
    </div>
  );
}
export default Footer;
