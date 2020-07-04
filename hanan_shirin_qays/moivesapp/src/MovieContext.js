import React, { useState, createContext } from "react";


export const MovieContext = createContext();

export const MovieProvider = (props) => {
    //App States

    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);


    //Search Box

    const [category, setCategory] = useState({});



    return (
        <MovieContext.Provider isLoading={[isLoading, setIsLoading]} query={[query, setQuery]} movies={[movies, setMovies]} category={[category, setCategory]}>
            {props.children}
        </MovieContext.Provider>
    )
}