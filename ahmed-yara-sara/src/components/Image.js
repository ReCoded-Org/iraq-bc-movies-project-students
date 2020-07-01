import React, {useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { Card, Button, Col } from "react-bootstrap";


function Image(props) {
    let image=`https://image.tmdb.org/t/p/w500/${props.image}`
      let  style={
            height:"500px",
            width:"400px",
            margin:"4px"
        }
  return (
    <>
    <card ><a href="#">
    <Card.Img variant="top" src={image} style={style}/></a>
    </card>
      </>
  );
}

export default Image;
