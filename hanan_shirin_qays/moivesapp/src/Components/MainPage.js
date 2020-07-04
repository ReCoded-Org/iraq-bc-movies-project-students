import React,{useContext} from "react";
import MoviesGrid from "./MoviesGrid";
import {StateProvider} from "../StateProvider"; 
function MainPage(props) {
const {movies} = useContext(StateProvider);

  return (
    <React.Fragment>
      {movies.movies.length > 0 && <MoviesGrid />}
    </React.Fragment>
  );
}

export default MainPage;
