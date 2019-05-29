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
import PlanetDetails from "./planets/PlanetDetails";
import SpeciesDetails from "./species/SpeciesDetails";
import StarshipDetails from "./starships/StarshipDetails";
import VehicleDetails from "./vehicles/VehicleDetails";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People} />
        <Route path="/people/:numberPeople" component={ItemDetails} />
        <Route exact path="/planets" component={Planets} />
        <Route path="/planets/:numberPlanet" component={PlanetDetails} />
        <Route exact path="/films" component={Films} />
        <Route path="/films/:numberFilm" component={FilmDetails} />
        <Route exact path="/species" component={Species} />
        <Route path="/species/:numberSpecies" component={SpeciesDetails} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route path="/vehicles/:numberVehicle" component={VehicleDetails} />
        <Route exact path="/starships" component={Starships} />
        <Route path="/starships/:numberStarship" component={StarshipDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
//<Route component={PageNotFound} />
// exact path="/people/:number" component={ItemDetails} />
