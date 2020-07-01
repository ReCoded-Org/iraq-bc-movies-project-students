import React, {useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { Card, Button, Col } from "react-bootstrap";
import Search from "./Search";


function Production(props) {
    const {details}=props;
  console.log(details)
  let image=`https://image.tmdb.org/t/p/w500/${details.logo_path}`
  let style={
      borderRadius:"100px",
      width:"300px"
  }
  return (
    <>
    <h2>Producion Compaines</h2>
    {details ? details.production_companies.map(company =>
   <Card style={style}>
      <Card.Title>{company.name}</Card.Title>
       </Card>
    
    ):<h4>"error</h4>}
      </>
  );
}

export default Production;
