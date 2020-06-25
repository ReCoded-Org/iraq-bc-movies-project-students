import React, { useState, useEffect } from "react";
import RenderMovie from "./RenderMovie";

function Main() {
  const API_KEY = "api_key=542003918769df50083a13c415bbc602";
  const BASE_URL = `https://api.themoviedb.org/3/`;
  const SEARCH_URL = BASE_URL + `search/movie?${API_KEY}query=${query}`;

  const [render, setRender] = useState(query);

  useEffect(() => {
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setRender(data.results);
      });
  }, [query]);

  return (
    <React.Fragment>
      {/* <RenderMovie render={render} /> */}
      <h1>Welcome</h1>
    </React.Fragment>
  );
}
export default Main;
