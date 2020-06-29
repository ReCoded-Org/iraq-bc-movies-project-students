import React, { Component, useEffect } from "react";
import MovieGrid from "./MovieGrid";
function Main(props) {
  
  return (
    <>
      <p>Main Component</p>
      <MovieGrid movies={props.movies} />
    </>
  );
}

export default Main;
