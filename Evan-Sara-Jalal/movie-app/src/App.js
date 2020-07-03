import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import MainComponent from "./components/mainComponent";
import ActorInfo from "./components/ActorInfo";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import MoviePage from "./components/moviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [genreId, setGenreId] = useState(28);

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (query) => {
    return `${TMDB_BASE_URL}/search/movie?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=542003918769df50083a13c415bbc602&language=en-US"
    )
      .then((data) => data.json())
      .then((genres) => {
        setGenreList(genres.genres);
        //console.log(genreList);
      });
  });

  function handleGenreChange(evt) {
    setGenreId(evt.target.value);
    //console.log(evt.target.value);
    console.log(genreId);
  }
  function handleSubmit(e) {
    //e.preventDefault();
    // console.log(e.target[0].value);
    // console.log("it is working ");

    fetch(constructUrl(searchedTerm))
      .then((data) => data.json())
      .then((data) => {
        // console.log(data.results);
        const filtered = data.results.filter((movie) =>
          movie.genre_ids.includes(parseInt(genreId))
        );
        setMovieList(filtered);
        console.log(movieList[0]);
        // console.log(searchedTerm);
      });
  }

  function handleChange(e) {
    //console.log("working");
    setSearchedTerm(e.target.value);
  }

  return (
    <>
      <Router>
        <Navigation
          genreList={genreList}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleGenreChange={handleGenreChange}
          name="Netplex "
        />
        <div className="main-wrapper">
          <Switch>
            <Route path="/" exact>
              {" "}
              <MainComponent movies={movieList} />
            </Route>
            <Route path="/:id" exact component={MoviePage} />
            <Route path="/person/:actor_id" component={ActorInfo} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
