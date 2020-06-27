import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleMovies = (moviesResult) => {
    return setMovies([moviesResult]);
  };

  return (
    <div>
      <Navbar handleMovies={handleMovies} />
      <Main query={query} />
    </div>
  );
}

export default App;
