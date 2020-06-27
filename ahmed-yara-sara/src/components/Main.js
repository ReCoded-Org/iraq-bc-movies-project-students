import React, { Component, useEffect } from "react";
import MovieGrid from "./MovieGrid";
function Main(props) {
  useEffect(() => {});
  return (
    <>
      <p>Main Component</p>
      <MovieGrid movies={props.movies} />
    </>
  );
}

export default Main;
