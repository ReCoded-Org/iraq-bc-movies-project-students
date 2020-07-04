import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import MoviePage from "./Components/MoviePage";
import Footer from "./Components/Footer";
import ActorPage from "./Components/ActorPage";
import {StateProvider} from "./Components/StateProvider";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);

  // const handleQuery = (query) => {
  //   setQuery(query);
  // };

  // const handleMovies = (movies) => {
  //   setMovies(movies);
  //   setIsLoading(false);
  // };

  return (
    <StateProvider>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar
          // handleQuery={handleQuery}
          // handleMovies={handleMovies}
          // isLoading={isLoading}
          // setIsLoading={setIsLoading}
        />
        <HashRouter>
          <Switch>
            <Route exact path="/"component={MainPage} />
              {/* <MainPage
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                movies={movies}
                query={query}
              />
            </Route> */}
            <Route
              path="/Movie/:id"
              component={MoviePage}
            />
            <Route  path={"/people/:actor_id"} component={ActorPage} />
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </div>
    </StateProvider>
  );
}
export default App;
