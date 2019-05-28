import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PageNotFound from "../PageNotFound";
import ItemDetails from "./people/ItemDetails";
import People from "./people/People";
import Planets from "./planets/Planets";
import Films from "./films/Films";
import Species from "./species/Species";
import Vehicles from "./vehicles/Vehicles";
import Starships from "./starships/Starships";
import FilmDetails from "./films/FilmDetails";
import Home from "./home/Home";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/people" component={People} />
        <Route path="/people/:number" component={ItemDetails} />
        <Route path="/planets" component={Planets} />
        <Route exact path="/films" component={Films} />
        <Route path="/films/:numberFilm" component={FilmDetails} />
        <Route path="/species" component={Species} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/starships" component={Starships} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
//<Route component={PageNotFound} />
// exact path="/people/:number" component={ItemDetails} />
