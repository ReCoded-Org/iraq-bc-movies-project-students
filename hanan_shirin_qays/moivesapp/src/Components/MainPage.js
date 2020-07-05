import React, { useContext } from "react";
import MoviesGrid from "./MoviesGrid";
import { StateContext } from "../StateProvider";

function MainPage(props) {
  const [state] = useContext(StateContext);

  console.log(props);

  return <>{state.movies.length > 0 && <MoviesGrid />}</>;
}

export default MainPage;
