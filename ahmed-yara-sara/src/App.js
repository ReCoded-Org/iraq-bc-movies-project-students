import React from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Navbar1 handleMovies={setMovies}></Navbar1>
      <Main movies={movies}></Main>
      <FooterBar></FooterBar>
    </>
  );
}
export default App;
