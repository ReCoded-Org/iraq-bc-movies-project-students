import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App(props) {
  const [movies, setMovies] = useState([]);
  let id = props.id;
  return (
    <>
      <Navbar handleMovies={setMovies} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main movies={movies} />
          </Route>
          <Route path="/Movie/:id" component={MoviePage}></Route>
        </Switch>
      </Router>
      <FooterBar />
    </>
  );
}
export default App;
