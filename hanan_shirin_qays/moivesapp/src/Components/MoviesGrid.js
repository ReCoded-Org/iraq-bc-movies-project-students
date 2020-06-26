import MovieItem from "./MovieItem";
import React, { useState } from "react";



export default function MoviesGrid(props) {
 
    return (
        <>
        {props.movies.map(movie => MovieItem(movie))}
       </>);
    
    }