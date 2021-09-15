import React from "react";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Gallery from "../Gallery";
import Service from "../Service";
import Error from "../Error";

import { Switch, Route } from "react-router";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact component={Error} />
      </Switch>
    </>
  );
};

export default Routers;
