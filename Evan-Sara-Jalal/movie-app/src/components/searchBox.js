import React, { Component } from "react";
import { useState } from "react";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";

function SearchBox(props) {
  const [isHidden, setIsHidden] = useState(true);

  function handleOnKeyDown(e) {
    setIsHidden(false);
  }
  function handleSubmit(e) {
    //e.preventDefault();
    setIsHidden(!isHidden);
  }

  return (
    <>
      <Form
        inline
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
          props.handleSubmit();
        }}
        expand="md"
      >
        <FormControl
          onChange={props.handleChange}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onKeyDown={handleOnKeyDown}
          expand="md"
        />

        <Button type="submit" variant="outline-light">
          <Spinner
            animation="grow"
            variant="danger"
            size="sm"
            hidden={isHidden}
          />
          Search
        </Button>
      </Form>
    </>
  );
}

export default SearchBox;
