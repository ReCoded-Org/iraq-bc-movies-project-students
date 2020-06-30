import React, { useState, useEffect } from "react";
import MoviesGrid from "./MoviesGrid";
import Navbar from "./Navbar";

function MainPage(props) {
 

  return (
    <React.Fragment>
  
      {movies.length > 0 && (
        <MoviesGrid movies={props.movies} setMovieId={props.setMovieId} />
      )}
    </React.Fragment>
  );
}

export default MainPage;
