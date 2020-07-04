import React,{useContext} from "react";
import MoviesGrid from "./MoviesGrid";
import {StateContext} from "../StateProvider"; 
function MainPage() {
  console.log(useContext(StateContext));

const [state] = useContext(StateContext);

  return (
    <React.Fragment>
      {state.movies.length > 0 && <MoviesGrid />}
    </React.Fragment>
  );
}

export default MainPage;
