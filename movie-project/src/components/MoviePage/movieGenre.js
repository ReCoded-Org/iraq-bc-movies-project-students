import React from "react";
import { Badge } from "react-bootstrap";

export default function MovieGenre({ currentMovie }) {
  return (
    <div>
      {currentMovie.genres &&
        currentMovie.genres.map(obj => (
          <Badge
            className="ml-2"
            variant={changeColorClass()}
            key={`${obj.id}`}
            style={{ fontSize: "0.85rem" }}
          >
            {obj.name}
          </Badge>
        ))}
    </div>
  );
}

let colorIndex = -1;

function changeColorClass() {
  colorIndex++;
  let arrOfColorClasses = [
    "primary",
    "secondary",
    "dark",
    "info",
    "danger",
    "success"
  ];
  if (colorIndex < arrOfColorClasses.length) {
    return arrOfColorClasses[colorIndex];
  } else {
    colorIndex = 0;
    return arrOfColorClasses[colorIndex];
  }
}
