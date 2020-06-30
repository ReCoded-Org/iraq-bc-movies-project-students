import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "react-simple-flex-grid/lib/main.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState('');

  const handleQuery = (query) => {
    setQuery(query);
  };

  const handleMovies = (movies) => {
    setMovies(movies);
    setIsLoading(false);
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar
          handleQuery={handleQuery}
          handleMovies={handleMovies}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
                  {movieId!='' && <MoviePage movieId={movieId}  setMovieId={setMovieId}/>}

       { movieId=='' && <MainPage
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          movies={movies}
          query={query}
          setMovieId={setMovieId}
        />}
      </div>
      <Footer />
    </div>
  );
}
export default App;
