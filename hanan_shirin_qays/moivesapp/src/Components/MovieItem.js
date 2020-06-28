import React from "react";
import Card, { CardBody } from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

export default function MovieItem(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  return (
    <Card key={props.id} style={{ width: "50%" }}>
      <div class="card image">
        <Card.Img
          src={
            props.backdrop_path !== null
              ? baseUrl + props.backdrop_path
              : nullPhoto
          }
        />
        <React.Fragment>
          <h6 class="center datails">
            {props.title}
            <br />
            <span>Vote Average:
            
              
              <ReactStars
                count={10}
                value={props.vote_average}
                half={true}
                size={14}
                color2={"#ffd700"}/>
             ({props.vote_average})</span>
          </h6>
        </React.Fragment>
        <div class="details">
          <div class="center">
            <p>
              Released <br />
              {props.release_date}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
