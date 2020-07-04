import React, { useState, useReducer, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  // //App States

  // const [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);
  // //Search Box
  // const [category, setCategory] = useState({});

  const [state, dispatch] = useReducer(reducer, initialState);

  // const value =   {
  //     isLoading,
  //     setIsLoading,
  //     query,
  //     setQuery,
  //     movies,
  //     setMovies,
  //      category,
  //      setCategory,
  // };
  return (
    <StateContext.Provider
      value={
        // value
        [state, dispatch]
      }
    >
      {props.children}
    </StateContext.Provider>
  );
};

const initialState = {
  isLoading: false,
  query: "",
  movies: [],
  category: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "setLoading":
      return { ...state, isLoading: action.payload };
    case "setQuery":
      return { ...state, query: action.payload };
    case "setMovies":
      return { ...state, movies: action.payload };
    case "setCategory":
      return { ...state, category: action.payload };
    default:
      //   throw new Error();
      return { ...state };
  }
}