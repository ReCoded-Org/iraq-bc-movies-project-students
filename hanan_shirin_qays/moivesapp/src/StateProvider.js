import React, { useState, createContext } from "react";


export const StateContext = createContext();

export const StateProvider = (props) => {
    //App States

    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    //Search Box
    const [category, setCategory] = useState({});


const value =   {
    isLoading:[isLoading, setIsLoading], 
    query:[query, setQuery], 
    movies:[movies, setMovies],
     category:[category, setCategory],
};
    return (
        <MovieContext.Provider value={
          value
        }
         >
            {props.children}
        </MovieContext.Provider>
    )
}