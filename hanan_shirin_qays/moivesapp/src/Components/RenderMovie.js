import React, { useState } from "react";
import "./RenderMovie.css";

function RenderMovie(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      style={{ marginTop: "50px" }}
      className="example"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={props.src} alt="movie image" width="500px" height="300px" />
      {isShown && (
        <div class="content">
          <div class="text">
            <p>{props.overview}</p>
          </div>
        </div>
      )}
      <h3>{props.title}</h3>
    </div>
  );
}

export default RenderMovie;
