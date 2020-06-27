import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import MainComponent from "./components/mainComponent";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = query => {
    return `${TMDB_BASE_URL}/search/movie?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  function handleSubmit(e) {
    //e.preventDefault();
    // console.log(e.target[0].value);
    // console.log("it is working ");

    fetch(constructUrl(searchedTerm))
      .then(data => data.json())
      .then(data => {
        // console.log(data.results);
        setMovieList([...data.results]);
        console.log(movieList);
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
        handleSubmit={handleSubmit}
        handleChange={handleChange}
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
