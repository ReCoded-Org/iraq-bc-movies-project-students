import React, { Component } from "react";
import MovieGrid from "./movieGrid";
import { useState } from "react";
import MoviePage from "./moviePage";
function MainComponent(props) {
  // true false
  //const [showMovieGrid, setShowMovieGrid] = useState(true);

  return (
    <>
    
        <MovieGrid movies={props.movies} />
    
       
      
    </>
  );
}
export default MainComponent;
