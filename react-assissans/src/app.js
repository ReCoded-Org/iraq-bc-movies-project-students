import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("X");

  const handleMovies = (moviesResult) => {
    return setMovies([moviesResult]);
  };

  function handleQuery(query) {
    setQuery(query);
  }

  return (
    <div>
      <Navbar handleQuery={handleQuery} handleMovies={handleMovies} />
      <Main query={query} />
    </div>
  );
}

export default App;
