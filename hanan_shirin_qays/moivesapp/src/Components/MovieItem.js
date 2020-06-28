import React from "react";
import Card, { CardBody } from "react-bootstrap/Card";

export default function MovieItem(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  return (
    <Card className="mt-4 mb-4">

      <div class="card image">
        <Card.Img src={props.backdrop_path !== null
          ? baseUrl + props.backdrop_path
          : nullPhoto} />
        <React.Fragment >
          <h6 class="center datails">{props.title}<br /><span>Vote Average: {props.vote_average}</span></h6>
        </React.Fragment>
        <div class="details">
          <div class="center">
            <p>Released <br />{props.release_date}</p>
          </div>
        </div>
      </div>
    </Card>);
}
