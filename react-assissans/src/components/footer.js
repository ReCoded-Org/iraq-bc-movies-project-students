import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid text-light bg-dark"
        style={{ position: "absolute", bottom: "0" }}
      >
        <div className="row text-center justifu-content-center">
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-between">
            <h5>About us</h5>
            <p>
              We are a great innovation team which is infused with a great
              passion about doing great new things together. For us as a
              passionate team, there are no difficult tasks, only interesting
              ones.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-between">
            <h5>Team Members Github Acount</h5>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <h5>Support Re:Coded</h5>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <h5></h5>
        </div>
      </footer>
    </>
  );
}
