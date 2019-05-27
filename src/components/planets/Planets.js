import React from "react";

export default class People extends React.Component {
  state = {
    list: []
  };

  async componentDidMount() {
    const response = await fetch("https://swapi.co/api/planets");
    const data = await response.json();
    this.setState({ list: data.results });
  }

  render() {
    return this.state.list.map(item => <div>{item.name}</div>);
  }
}
