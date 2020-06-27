import React, { component } from 'react';
//import ReactHover from 'react - hover';
//import styled from "@emotion/styled/macro";
//import { useState } from "react";
import Card from 'react-bootstrap/Card';
//import { Col } from "react-bootstrap";

export default function MovieItem(props) {
    //const [isShown, setIsShown] = useState(false);
    //console.log(props.movie.backdrop_path);
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    const nullPhoto = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
    return (<Card>
        <Card.Img variant="top" src={props.backdrop_path !== null ? baseUrl + props.backdrop_path : nullPhoto} />
        <Card.Body>
            <Card.Text>
                {props.title}
            </Card.Text>
        </Card.Body>

    </Card>);
    //<Col lg={true}><img src=></img><p></p></Col >);
    //<Col xs>Second, but unordered</Col>
    //<Col xs={{ order: 'first' }}>Third, but first</Col>






    //<h1 key={props.id}>{props.title}</h1>);

}
