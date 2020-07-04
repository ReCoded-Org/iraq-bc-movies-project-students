//import React from "react";
//import { Route } from "react-router-dom/cjs/react-router-dom.min";
//import {    BrowserRouter as Router,     Switch, } from "react-router-dom";
import MainPage from "./MainPage";

import { constructUrl } from "./Api";
import React, { useState, useEffect } from "react";



export default function Search(props) {
    //console.log("this is search url" + props.match.params.query);
    //console.log(props);


    return (<>

        <MainPage movies={movies}
        />
    </>
    )
}
}
/*window.location.assign();*/