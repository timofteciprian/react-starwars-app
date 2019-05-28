import React from "react";
//import { Link } from "react-router-dom";
import "antd/dist/antd.css";
//import "./index.css";

export default class Species extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/species")
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results });
      });
  }

  render() {
    return this.state.list.map((item, index) => <div> item.name </div>);
  }
}
