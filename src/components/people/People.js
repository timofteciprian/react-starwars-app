import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
//import "./index.css";

export default class People extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results });
      });
  }

  render() {
    return this.state.list.map((item, index) => (
      <nav>
        <Link to={`/people/${index + 1}`}>{item.name}</Link>
      </nav>
    ));
  }
}
