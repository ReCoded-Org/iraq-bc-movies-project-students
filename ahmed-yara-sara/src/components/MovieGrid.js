import React, { Component } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MovieGrid (props) {
    const movies = props.movies;
console.log(movies);


return (
    <>
{movies.map(moive => <ul key={moive.id}> {moive.title}</ul>)}
</>
);


}