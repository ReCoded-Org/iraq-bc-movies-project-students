import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

function Spin(props) {
  const [spin, setSpin] = useState(false);
  return (
    <Spinner style={{ display: "none" }} animation="border" role="status">
      <span className="sr-only spin">Loading...</span>
    </Spinner>
  );
}
export default Spin;
