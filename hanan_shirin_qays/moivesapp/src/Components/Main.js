import React, { useState, useEffect } from "react";
import RenderMovie from "./RenderMovie";
import {constructUrl} from './Api';
function Main(props) {
  const query = props.query;
  console.log(query);
  

  const SEARCH_URL = constructUrl('search/movie',query);
 
 

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {

    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.results != undefined)
        setMovies(data.results);
      }).catch(err=> console.log(err));
    },[query]);
  
  console.log(movies);
  
  return (
    <React.Fragment>
      {movies.length > 0 && movies.map(movie=><h1>{movie.title}</h1>)}
    </React.Fragment>
  );
}
export default Main;
