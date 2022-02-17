import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";

import Scroll from "./scroll";

const App = () => {
  return (
    <>
      <Navbar />
      <Scroll showBelow={250} />
      <Switch>
        <Route exact path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
