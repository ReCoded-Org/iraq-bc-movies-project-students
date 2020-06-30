import React, { useState, useEffect } from "react";
import MoviesGrid from "./MoviesGrid";

function MainPage(props) {
 

  return (
    <React.Fragment>
  
      {props.movies.length > 0 && (
        <MoviesGrid movies={props.movies} 
        // setMovieId={props.setMovieId}
         />
      )}
    </React.Fragment>
  );
}

export default MainPage;
