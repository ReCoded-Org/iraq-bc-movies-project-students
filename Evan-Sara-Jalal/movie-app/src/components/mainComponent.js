import React, { Component } from "react";
import MovieGrid from "./movieGrid";
function MainComponent(props) {
  return (
    <>
      <MovieGrid movies={props.movies} />
    </>
  );
}
export default MainComponent;
