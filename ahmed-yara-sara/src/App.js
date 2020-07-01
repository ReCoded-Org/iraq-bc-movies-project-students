import React from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import MoviePage from "./components/MoviePage";
import {BrowserRouter as Router ,Switch ,Route,Link} from "react-router-dom";
import MovieItem from "./components/MovieItem"
function App(props) {
  const [movies, setMovies] = useState([]);
let id=props.id;
  return (
    <>
      <Navbar1 handleMovies={setMovies}></Navbar1>
      
      
      <Router>
      <Switch>
      <Route path="/" exact><Main movies={movies}></Main></Route>
      <Route path="/Movie/:id" component={MoviePage}></Route>
      </Switch>
      </Router>
      <FooterBar></FooterBar>
      
    </>
  );
}
export default App;
