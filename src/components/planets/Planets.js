import React from "react";

export default class Planets extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/planets")
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results });
      });
  }

  render() {
    return this.state.list.map(item => <p> item.name </p>);
  }
}
