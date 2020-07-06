import React, { useState, useEffect } from "react";
import "./movie.css";
export default function MovieTrailer({ movieId }) {
  const [videos, setVideos] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        setVideos(data.results[0]);
      });
  }, []);

  return (
    <>
      {videos && (
        <>
          <h3
            className="text-center display-3 my-4"
            style={{ fontSize: "3rem" }}
          >
            Trailer
          </h3>
          <div className="w-100 videoWrapper">
            <iframe
              className="embed-responsive-item"
              title={`${videos.id}`}
              src={`https://www.youtube.com/embed/${videos.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </>
      )}
    </>
  );
}
