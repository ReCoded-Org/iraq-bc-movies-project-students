import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../../App.css";

export default function MovieCast({ movieId }) {
  const [cast, setCast] = useState();
  let imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}`
    )
      .then(response => response.json())
      .then(data => {
        setCast(data.cast);
      });
  }, []);

  return (
    <Carousel>
      {cast &&
        cast.map(actor => (
          <Carousel.Item
            key={actor.cast_id}
            style={{
              minHeight: "370px",
              maxHeight: "600px"
            }}
          >
            <Link to={`/people/${actor.id}`}>
              <img
                className="d-block w-100 "
                alt="cast"
                style={{ opacity: 0 }}
                src="https://mcdn.wallpapersafari.com/medium/50/19/l7d5Aq.png"
              />
              <Carousel.Caption className="text-dark">
                <img
                  className="d-block mx-auto img-fluid"
                  alt="cast"
                  style={{
                    width: "110px",
                    height: "auto",
                    borderRadius: "15px"
                  }}
                  src={`${imageBaseUrl + actor.profile_path}`}
                  onError={e => {
                    e.target.src =
                      "https://www.pinclipart.com/picdir/big/195-1955082_theatre-mask-icon-clipart.png";
                  }}
                />
                <h3 className="mt-2 display-3" style={{ fontSize: "1.5rem" }}>
                  {actor.name}
                </h3>
                <h6>{actor.character}</h6>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
