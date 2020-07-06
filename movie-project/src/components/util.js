import React from "react";
import { Badge } from "react-bootstrap";

export function formatDate(date) {
  let dateObj = new Date(date);
  let dateString = dateObj.toDateString();
  return dateString.slice(4, 10) + ", " + dateString.slice(11);
}

export function findGenresToRender(movieGenreIds, genresList) {
  return movieGenreIds.map((genreId, index) => {
    let theGenre = genresList.find(item => item.id === genreId);
    if (theGenre) {
      return (
        <Badge
          className="mr-1 text-dark"
          key={`${genreId}`}
          style={{ fontSize: "0.85rem", backgroundColor: "#e9ecef" }}
        >
          {theGenre.name}
        </Badge>
      );
    } else {
      return <span key={`${index}`} />;
    }
  });
}
