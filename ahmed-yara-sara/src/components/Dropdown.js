 import React, { Component } from "react";
 import "react-bootstrap";
 import {Dropdown } from "react-bootstrap";
 import { useState,useEffect } from "react";

 export default function DropdownMenu(props) {
const [Genres,setGenres]=useState([]);

  useEffect(() =>{
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const constructUrl = (path, query) => {
      return `${TMDB_BASE_URL}/${path}?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}&query=${query}`;
    };
    const URL = constructUrl("genre/movie/list","");
    fetch(URL)
      .then((genre) => genre.json())
      .then((data) => {
      setGenres(data.genres);
      console.log(data.genres)
});
},[URL]);

  //useEffect(()=>{fetchGenre()});

    return (
      <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" variant="outline-info" className="mr-2">
      Genre  </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item key={"1"}>All Genres</Dropdown.Item>
        {Genres.map((genre) => {
    return  <Dropdown.Item key={genre.id}
             
                           >
                      {genre.name} </Dropdown.Item>
        })}
        </Dropdown.Menu>
      </Dropdown>
      </>      
)
 }