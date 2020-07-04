import React, { useState, useEffect } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";

const DropDown = (props) => {
  return (
    <React.Fragment>
      <Form.Control
        as="select"
        onChange={props.handleGenreChange}
        className="drop-down"
      >
        {props.genreList.map((genre) => {
          return (
            <option id={genre.id} key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </Form.Control>
    </React.Fragment>
  );
};

export default DropDown;
