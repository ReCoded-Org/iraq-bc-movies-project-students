import React, { useState, useEffect } from "react";
import Card, { CardBody } from "react-bootstrap/Card";
import Search from "./Search";
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router ,Switch ,Route,Link} from "react-router-dom";
import Image from "./Image";
import MovieDetails from "./MovieDetails"
import {useHistory} from "react-router";
import Production from "./Production";
export default function Actors(props) {
    const history = useHistory();
    
    const [movie,setActor]=useState("");
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  }
    
      useEffect(async()=>{
        URL = constructUrl(`/person/{person_id}`);
        let res= await fetch(URL)
        let data=await res.json();
        setActor(data);
        console.log(data)
        
      });
      
     
      

  return (
    <>
        <div>
           
            <h1>just</h1>
        </div>
   </>
  );
}