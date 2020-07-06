import React, { useEffect, useContext } from "react";
import Main from "../Main/main";
import { fetchQuery } from "../API";
import { useLocation } from "react-router-dom";
import { MovieContext } from "../../StateProvider";

export default function SearchResult() {
  const [, dispatch] = useContext(MovieContext);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");

  useEffect(() => {
    fetchQuery(query).then(data => {
      dispatch({ type: "SET_MOVIES", moviesList: data.results });
    });
  }, [query]);

  return <Main />;
}
