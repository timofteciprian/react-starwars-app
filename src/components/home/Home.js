import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>Films</h1>
    <p>Actors</p>
    <Link to="people" className="btn btn-primary btn-lg">
      Read more actors
    </Link>
  </div>
);

export default Home;
