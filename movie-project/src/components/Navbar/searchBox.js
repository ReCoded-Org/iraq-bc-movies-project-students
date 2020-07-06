import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function SearchBox() {
  const textInput = React.useRef();
  const history = useHistory();
  return (
    <>
      <Form
        inline
        onSubmit={e => {
          e.preventDefault();
          let query = e.target.children[0].value;
          history.push(`/search?query=${query}`);
          textInput.current.value = "";
        }}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-s w-auto"
          ref={textInput}
        />
        <Button type="submit" variant="outline-primary" className="m-1">
          Search
        </Button>
      </Form>
    </>
  );
}
