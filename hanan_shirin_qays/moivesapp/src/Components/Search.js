import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Spinners from "./Spinner";
import DropdownCategories from "./DropdownCategories";

function Search(props) {
  return (
    <Form inline onSubmit={props.onSubmit}>
      <DropdownCategories
        categorie={props.categorie}
        setCategorie={props.setCategorie}
      />
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={props.onChange}
      />
      <Button variant="outline-light" type="submit">
        Search
        <span>
          <Spinners isSpinnerHidden={props.isSpinnerHidden} />
        </span>
      </Button>
    </Form>
  );
}
export default Search;
