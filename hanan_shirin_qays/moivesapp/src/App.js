import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import "react-simple-flex-grid/lib/main.css";
import MoviePage from "./Components/MoviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/Movie" component={MoviePage} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
export default App;
