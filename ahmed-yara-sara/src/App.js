import React from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleQuery = (query) => {
    setQuery(query);
  };

  const handleMovies = (movies) => {
    setMovies(movies);
    console.log("moveis handle is working ");
  };
  console.log(movies);

  return (
    <>
      <Navbar1 handleQuery={handleQuery} handleMovies={handleMovies}></Navbar1>

      <Main movies={movies}></Main>
      <FooterBar></FooterBar>
    </>
  );
}
export default App;
