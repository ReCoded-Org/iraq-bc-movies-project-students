import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Trailer from "./trailer";
import Casts from "./casts";
import Image from "./image";
import Genres from './genres'

export default function MoviePage({ match }) {
  console.log(match);

  const movie_id = match.params.id;
  const [item, setItem] = useState("");
  console.log(match);
  const fetchData = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItem(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(item.id);
  
  return (
    <div>
      <h1>{item.original_title}</h1>
      <Image moviesData={item} />
      <Link to="/">
        <button>back</button>
      </Link>
      {item.id&&<Trailer trailer={item.id}/>}
      {item && <Genres genres={item}/>}
      {item.id&&<Casts cast={item.id}/>}
    </div>
  );
}
