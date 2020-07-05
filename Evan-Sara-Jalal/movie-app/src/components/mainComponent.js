import React, { Component } from "react";
import MovieGrid from "./movieGrid";
import { useState } from "react";
import MoviePage from "./moviePage";
function MainComponent(props) {
  return (
    <>
      <MovieGrid movies={props.movies} />
    </>
  );
}
export default MainComponent;
