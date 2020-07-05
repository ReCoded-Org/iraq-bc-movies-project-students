import React, { useReducer, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};

const initialState = {
  isLoading: true,
  query: "",
  movies: [],
  // category: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "setLoading":
      return { ...state, isLoading: action.payload };
    case "setQuery":
      return { ...state, query: action.payload };
    case "setMovies":
      return { ...state, movies: action.payload };
    // case "setCategory":
    //   return { ...state, category: action.payload };
    default:
      return { ...state };
  }
}
