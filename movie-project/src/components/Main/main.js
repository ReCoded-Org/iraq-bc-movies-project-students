import React, { useContext } from "react";
import MoviesGrid from "./MoviesGrid";
import Myfooter from "./footer";
import { MovieContext } from "../../StateProvider";

export default function Main() {
  const [state] = useContext(MovieContext);
  return (
    <>
      <MoviesGrid moviesList={state.moviesList} />
      {state.moviesList.length !== 0 && <Myfooter />}
    </>
  );
}
