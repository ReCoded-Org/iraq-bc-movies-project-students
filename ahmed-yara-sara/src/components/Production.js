import React, { useEffect } from "react";
import MovieGrid from "./MovieGrid";
import MoviePage from "./MoviePage";
import { Card, Button, Col } from "react-bootstrap";
import Search from "./Search";

function Production(props) {
  const { details } = props;
  let image = `https://image.tmdb.org/t/p/w500/${details.logo_path}`;
  return (
    <>
      <h2>Producion Compaines</h2>
      <div className="d-flex justify-content-center">
        {details ? (
          details.production_companies.map((company) => (
            <Card className=" m-2">
              <Card.Title className=" m-2">{company.name}</Card.Title>
            </Card>
          ))
        ) : (
          <h4>"error</h4>
        )}
      </div>
    </>
  );
}

export default Production;
