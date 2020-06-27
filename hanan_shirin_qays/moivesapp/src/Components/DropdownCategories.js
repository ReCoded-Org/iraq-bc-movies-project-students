import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import RenderCategories from "./RenderCategories";

export default function DropdownCategories(props) {
  return (
    <>
      <Dropdown style={{ marginRight: "5px" }}>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          {props.category.name || "Categories"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <RenderCategories setCategory={props.setCategory} />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
