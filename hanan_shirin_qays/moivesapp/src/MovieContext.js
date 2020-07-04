import React, { useState, createContext } from "react";


export const MovieContext = createContext();

export const MovieProvider = (props) => {
    //States

    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleQuery = (query) => {
        setQuery(query);
    };

    const handleMovies = (movies) => {
        setMovies(movies);
        setIsLoading(false);
    };



    return (
        <MovieContext.Provider isLoading={[isLoading, setIsLoading]} query={[query, setQuery]} movies={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}