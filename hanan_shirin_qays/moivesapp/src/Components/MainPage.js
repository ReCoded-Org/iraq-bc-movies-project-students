import React, { useContext } from "react";
import MoviesGrid from "./MoviesGrid";
import { StateContext } from "../StateProvider";

function MainPage() {
  const [state] = useContext(StateContext);

  return <>{state.movies.length > 0 && <MoviesGrid />}</>;
}

export default MainPage;
