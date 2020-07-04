import React,{useContext} from "react";
import MoviesGrid from "./MoviesGrid";
import {StateContext} from "../StateProvider"; 
function MainPage() {
  console.log(useContext(StateContext));

const {movies} = useContext(StateContext);

  return (
    <React.Fragment>
      {movies[0].length > 0 && <MoviesGrid />}
    </React.Fragment>
  );
}

export default MainPage;
