import React, { useState } from "react";
import {Card, Button, Col } from "react-bootstrap";
import MovieGrid from "./MovieGrid"
function MovieItem(props) {

  

  return (
    <>  
     <Col>
       
    <Card className="m-5 p-2" style={{ width: "300px" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${props.image}`}
        
      />
      <Card.Body>
        <li>{props.title}</li>
        <li>{props.overview}</li>
        <li>{props.popularity}</li>
       <li>{props.release_date}</li>
    
      </Card.Body>
    </Card>
   
  </Col>
  

  </>
);
}

export default MovieItem;