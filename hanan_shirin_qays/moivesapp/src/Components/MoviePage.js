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

  return (
    <>
      <Button variant="secondary">
        <a href="/" style={{ color: "white" }}>
          Go Back
        </a>
      </Button>

      {movie.original_title}
    </>
  );
}
