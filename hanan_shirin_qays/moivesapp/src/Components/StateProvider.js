import React,{ useState, createContext } from "react";


export const StateContext = createContext();

export const StateProvider = props =>{
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const value={
        
    }
return <StateContext.Provider value={}>{props.children}</StateContext.Provider>
}