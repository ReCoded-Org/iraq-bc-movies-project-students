//import React from "react";
//import { Route } from "react-router-dom/cjs/react-router-dom.min";
//import {    BrowserRouter as Router,     Switch, } from "react-router-dom";
import MainPage from "./MainPage";

import { constructUrl } from "./Api";
import React, { useState, useEffect } from "react";



export default function Search(props) {
    //console.log("this is search url" + props.match.params.query);
    //console.log(props);
    const [query, setQuery] = useState("");
    setQuery(props.match.params.query);
    let movies = {};

    useEffect(fetchMovies, [props.isLoading]);
    function fetchMovies() {
        if (!props.isLoading) return;
        let SEARCH_URL;
        if (query !== "") {
            SEARCH_URL = constructUrl("search/movie", query);
        } else {
            SEARCH_URL = constructUrl("movie/popular");
            fetch(SEARCH_URL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.results !== undefined) {
                        movies = data.results;
                        console.log(movies);
                        /*if (category.id) {
                            movies = movies.filter((movie) =>
                                movie.genre_ids.includes(category.id)
                            );
                            console.log(movies);
                        }*/
                        props.handleMovies(movies);
                    }
                })
                .catch((err) => console.log(err));
        }

        return (<>

            <MainPage movies={movies}
            />
        </>
        )
    }
}
/*window.location.assign();*/