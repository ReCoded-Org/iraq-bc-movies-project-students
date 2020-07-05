import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import MoviePage from "./Components/MoviePage";
import Footer from "./Components/Footer";
import ActorPage from "./Components/ActorPage";
import { StateProvider } from "./StateProvider";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <StateProvider>
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <Navbar />
            <Switch>
              <Route path="/iraq-bc-movies-project-students">
                <Redirect to="/" />
              </Route>
              <Route path={"/Movie/:id"} component={MoviePage} />
              <Route path={"/person/:actor_id"} component={ActorPage} />
              <Route exact path="/" component={MainPage} />
              <Route path="/search" component={MainPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </StateProvider>
  );
}
export default App;
