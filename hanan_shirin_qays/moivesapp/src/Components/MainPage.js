import React from "react";
import MoviesGrid from "./MoviesGrid";

function MainPage(props) {
  return (
    <React.Fragment>
      {props.movies.length > 0 && <MoviesGrid movies={props.movies} />}
    </React.Fragment>
  );
}

export default MainPage;
