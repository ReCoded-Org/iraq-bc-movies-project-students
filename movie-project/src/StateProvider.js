import React, { useReducer, createContext, useEffect } from "react";
import { fetchGenres } from "./components/API";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const initialState = {
    moviesList: [],
    genresList: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchGenres().then(data => {
      dispatch({ type: "SET_GENRES", genresList: data.genres });
    });
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case "SET_MOVIES":
        return { ...state, moviesList: [...action.moviesList] };
      case "SET_GENRES":
        return { ...state, genresList: [...action.genresList] };
      default:
        throw new Error();
    }
  }

  return (
    <>
      <MovieContext.Provider value={[state, dispatch]}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
};
