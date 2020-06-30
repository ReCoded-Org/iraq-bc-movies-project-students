import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import MoviePage from "./Components/MoviePage";
import Footer from "./Components/Footer";
import "react-simple-flex-grid/lib/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

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
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainPage
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                movies={movies}
                query={query}
              />
            </Route>
            <Route path="/Movie/:id" component={MoviePage} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
export default App;
