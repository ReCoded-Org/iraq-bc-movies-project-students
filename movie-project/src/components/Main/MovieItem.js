import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate } from "../util";
import { MovieContext } from "../../StateProvider";
import { findGenresToRender } from "../util";
let imageBaseUrl = "https://image.tmdb.org/t/p/original";

export default function MovieItem({ movie }) {
  let imgUrl = imageBaseUrl + movie.poster_path;
  const [state] = useContext(MovieContext);
  return (
    <li className="m-5 tilt-in-top-1">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
          <Card
            style={{ width: "17rem", border: "none" }}
            className="align-items-center justify-content-center shadow-sm movie-item"
          >
            <Card.Img
              variant="top"
              src={imgUrl}
              onError={e => {
                e.target.src =
                  "https://www.pinclipart.com/picdir/big/134-1340367_movie-icons-free-download-software-icon-png-blue.png";
              }}
            />
            <Card.Body className="w-100">
              <Card.Title style={{ fontSize: "1.6rem", color: "black" }}>
                {movie.title}
              </Card.Title>
              <Card.Text>
                {findGenresToRender(movie.genre_ids, state.genresList)}
              </Card.Text>
              <Card.Text>
                <Badge
                  variant="warning"
                  style={{ fontSize: "0.85rem" }}
                  className="mr-2"
                >
                  Rating {movie.vote_average}
                </Badge>
                <Badge variant="primary" style={{ fontSize: "0.85rem" }}>
                  {formatDate(movie.release_date)}
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </Link>
    </li>
  );
}
