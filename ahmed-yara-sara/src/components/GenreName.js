import React, {useEffect ,useState} from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { Card, Button, Col } from "react-bootstrap";


function Genre(props) {
    const [movie,setMovie]=useState("");
    let movie_id=props.match.params.id;
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  }
    
      useEffect(async()=>{
        URL = constructUrl(`movie/${movie_id}`);
        let res= await fetch(URL)
        let data=await res.json();
       setMovie(data)
        console.log(data.genre[0].name)
        
      });
    
  return (
    <>
    <card >
    <h1>uhuhu</h1>
    </card>
      </>
  );
}

export default Genre;
