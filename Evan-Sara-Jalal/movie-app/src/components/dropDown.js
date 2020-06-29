import React, { useState, useEffect } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";

const DropDown = props => {
  //const [value, setValue] = useState(null);
  //const [genreList, setGenreList] = useState([]);
  // function handleChange(evt) {
  //   setValue(evt.target.value);
  // }

  return (
    <React.Fragment>
      <Form.Control as="select" onChange={props.handleGenreChange}>
        {props.genreList.map(genre => {
          return (
            <option id={genre.id} key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </Form.Control>
      {/* <Button onClick={fetchGeneres}> change genere</Button> */}
    </React.Fragment>

    // <React.Fragment>
    //   <Dropdown className="mr-3">
    //     <Dropdown.Toggle variant="danger" id="dropdown-basic">
    //       Geners
    //     </Dropdown.Toggle>

    //     <Dropdown.Menu>
    //       {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    //       {genreList.map(genre => {
    //         return (
    //           <Dropdown.Item id={genre.id} href="#/action-2" key={genre.id}>
    //             {genre.name}
    //           </Dropdown.Item>
    //         );
    //       })}
    //     </Dropdown.Menu>
    //   </Dropdown>
    //   <Button onClick={fetchGeneres}> change genere</Button>
    // </React.Fragment>
  );
};

export default DropDown;
