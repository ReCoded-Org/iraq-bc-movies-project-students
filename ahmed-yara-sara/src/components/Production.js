import React from "react";
import { Card,} from "react-bootstrap";


function Production(props) {
  const { details } = props;
 
 
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
