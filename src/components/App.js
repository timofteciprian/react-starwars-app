import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PageNotFound from "../PageNotFound";
//import ItemDetails from "./components/people/ItemDetails";
import People from "./people/People";
import Planets from "./planets/Planets";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

// exact path="/people/:number" component={ItemDetails} />
