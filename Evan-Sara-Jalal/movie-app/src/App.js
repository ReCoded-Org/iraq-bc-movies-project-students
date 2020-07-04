import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import MainComponent from "./components/mainComponent";
import ActorInfo from "./components/ActorInfo";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import MoviePage from "./components/moviePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [genreId, setGenreId] = useState(28);
  const history = useHistory();

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (query) => {
    return `${TMDB_BASE_URL}/search/movie?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  useEffect(() => {
    fetchGenres();
    fetchPopularMovies();
  }, [genreId]);

  const fetchGenres = () => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=542003918769df50083a13c415bbc602&language=en-US"
    )
      .then((data) => data.json())
      .then((genres) => {
        setGenreList(genres.genres);
      });
  };

  const fetchPopularMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7a757097cf4698b75ed2848485f49571&language=en-US&page=1`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        const filtered = resp.results.filter((movie) =>
          movie.genre_ids.includes(parseInt(genreId))
        );
        setMovieList(filtered);
      });
  };

  function handleGenreChange(evt) {
    setGenreId(evt.target.value);
    //console.log(evt.target.value);
    console.log(genreId);
  }
  function handleSubmit(e) {
    fetch(constructUrl(searchedTerm))
      .then((data) => data.json())
      .then((data) => {
        // console.log(data.results);
        const filtered = data.results.filter((movie) =>
          movie.genre_ids.includes(parseInt(genreId))
        );
        setMovieList(filtered);
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
          <Redirect to="/" />
          <Switch>
            <Route path="/" exact>
              {" "}
              <MainComponent movies={movieList} />
            </Route>
            <Route path="/:id" exact component={MoviePage} />
            <Route path="/person/:actor_id" component={ActorInfo} />
            <Route
              render={() => {
                return <h1>Page not found (404)</h1>;
              }}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
