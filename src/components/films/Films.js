import React from "react";
//import { Link } from "react-router-dom";
import "antd/dist/antd.css";
//import "./index.css";

export default class Films extends React.Component {
  state = {
    list: []
  };

  async componentDidMount() {
    const response = await fetch("https://swapi.co/api/films");
    const data = await response.json();
    this.setState({ list: data.results });
  }

  render() {
    return this.state.list.map((item, index) => <div>{item.name}</div>);
  }
}
