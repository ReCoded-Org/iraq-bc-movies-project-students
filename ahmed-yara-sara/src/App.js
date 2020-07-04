import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Navbar handleMovies={setMovies} />
      <Main movies={movies} />
      <FooterBar />
    </>
  );
}
export default App;
