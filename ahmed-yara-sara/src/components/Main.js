import React, {useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
function Main(props) {

  return (
    <>
      <MovieGrid movies={props.movies}  />
      
      </>
  );
}

export default Main;
