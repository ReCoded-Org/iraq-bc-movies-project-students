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
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <StateProvider>
      <HashRouter>
      <Navbar />
<div >
        <div className="page-container">
          <div className="content-wrap">
            <Switch>
              <Route path="/iraq-bc-movies-project-students">
                <Redirect to="/" />
              </Route>
              <Route path={"/Movie/:id"} component={MoviePage} />
              <Route path={"/person/:actorId"} component={ActorPage} />
              <Route exact path="/" component={MainPage} />
              <Route path="/search" component={MainPage} />
            </Switch>
          </div>
        </div>
        </div>
        <Footer />

      </HashRouter>
    </StateProvider>
  );
}
export default App;
