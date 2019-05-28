import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PageNotFound from "../PageNotFound";
import ItemDetails from "./people/ItemDetails";
import People from "./people/People";
import Planets from "./planets/Planets";
import Films from "./films/Films";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/people" component={People} />
        <Route exact path="/people/:number" component={ItemDetails} />
        <Route path="/planets" component={Planets} />
        <Route path="/films" component={Films} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

// exact path="/people/:number" component={ItemDetails} />
