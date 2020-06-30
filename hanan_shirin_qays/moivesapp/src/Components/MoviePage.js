import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button } from "react-bootstrap";
import MoviesGrid from "./MoviesGrid";

export default function MoviePage(props) {
  const [movie, setMovie] = useState("");
  let SEARCH_URL;
  // let props={
  //   match:{
  //     params:
  //     {id:'hgdyf'}
  //   }
  // }
  console.log(props.match);

  let movie_id = props.match.params.id;
console.log(movie_id);

  useEffect(async () => {
    SEARCH_URL = constructUrl(`movie/${movie_id}`);
    // const res=await fetch(SEARCH_URL)
    // const data = await res.json();
    // fetch(SEARCH_URL)
    // .then(res=>res.json())
    // .then(data=>setMovie(data))
    let res = await fetch(SEARCH_URL);
    let data = await res.json();
    setMovie(data);
  }, [movie_id]);
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";





//     Genres (you will need to fetch all the genres and do some comparison do get the name of the genres)
// you fetch them same as the drop down nav thing and 

// Trailers of this movie (which will include another fetch)
// you use ifram to show the youtube embeded
// Actors of this movie (which will include another fetch)
// you fetch each actor from his id from the data base and display there names 
//you use alot of for loop and async await 

  return (
    <>
      <Button variant="secondary">
        <a href="/" style={{ color: "white" }}>
          Go Back
        </a>
      </Button>


      {movie.original_title}


      <img
          src={
            movie.backdrop_path !== null
              ? baseUrl + movie.backdrop_path
              : nullPhoto
          }
          />
    </>
  );
}
