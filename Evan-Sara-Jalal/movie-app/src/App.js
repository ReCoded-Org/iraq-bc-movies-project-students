import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import MainComponent from "./components/mainComponent";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

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
      })
  },[]);

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
        //console.log(genreId)
       // console.log(filtered);
        setMovieList(filtered);

        // console.log(searchedTerm);
      });
  }

  function handleChange(e) {
    //console.log("working");
    setSearchedTerm(e.target.value);
  }
  return (
    <>
      <Navigation
        genreList={genreList}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleGenreChange={handleGenreChange}
        name="Netplex "
      />
      <div className="main-wrapper">
        <MainComponent movies={movieList} />
      </div>
      <Footer />
    </>
  );
}

export default App;
