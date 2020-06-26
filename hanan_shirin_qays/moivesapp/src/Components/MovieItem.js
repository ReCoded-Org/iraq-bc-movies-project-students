
import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
//import { Col } from "react-bootstrap";

export default function MovieItem(props) {
    //console.log(props.movie.backdrop_path);
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    return (<>
        <Card>
            <Card.Img variant="top" src={baseUrl + props.backdrop_path} />

            <Card.Body>
                <Card.Text>
                    {props.title}
                </Card.Text>
            </Card.Body>
        </Card>
    </>);
    //<Col lg={true}><img src=></img><p></p></Col >);
    //<Col xs>Second, but unordered</Col>
    //<Col xs={{ order: 'first' }}>Third, but first</Col>





    //<h1 key={props.id}>{props.title}</h1>);

}
