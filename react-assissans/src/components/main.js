import React from "react";

export default function Main(props) {
  console.log(props.moviesData);
  return (
    <React.Fragment>
      <ul>
        {props.moviesData.map((movie) =>
          movie.map((data) => <li>{data.title}</li>)
        )}
      </ul>
    </React.Fragment>
  );
}
