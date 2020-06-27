import React, { Component } from "react";
import "react-bootstrap";
import { Spinner, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Search() {
  const [isSubmitted, submitForm] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    if (isSubmitted)
      setTimeout(() => {
        submitForm(false);
      }, 3000);
  }, [isSubmitted]);

  return (
    <Form
      inline
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(true);
        console.log("you searched for " + searchValue);
      }}
    >
      <FormControl
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-info" type="submit">
        {!isSubmitted && "Search"}
        {isSubmitted && <Spinner size="sm" animation="border" variant="info" />}
      </Button>
    </Form>
  );
}
