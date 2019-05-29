import React from "react";
import "antd/dist/antd.css";
import { Descriptions, Spin } from "antd";

export default class PlanetDetails extends React.Component {
  state = {
    item: {},
    loading: false
  };

  componentDidMount() {
    const numberPlanet = this.props.match.params.numberPlanet;
    fetch(`https://swapi.co/api/planets/${numberPlanet}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ item: json, loading: true });
      });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div style={divStyle}>
          <Spin size="small" />
          <Spin />
          <Spin size="large" tip="Loading..." />
        </div>
      );
    }
    return (
      <Descriptions title="Details">
        <Descriptions.Item label="Name">
          {this.state.item.name}
        </Descriptions.Item>
        <Descriptions.Item label="Rotation Period">
          {this.state.item.rotation_period}
        </Descriptions.Item>
        <Descriptions.Item label="Orbital Period">
          {this.state.item.orbital_period}
        </Descriptions.Item>
        <Descriptions.Item label="Diameter">
          {this.state.item.diameter}
        </Descriptions.Item>
        <Descriptions.Item label="Climate">
          {this.state.item.climate}
        </Descriptions.Item>
        <Descriptions.Item label="Gravity">
          {this.state.item.gravity}
        </Descriptions.Item>
        <Descriptions.Item label="Terrain">
          {this.state.item.terrain}
        </Descriptions.Item>
        <Descriptions.Item label="Surface Water">
          {this.state.item.surface_water}
        </Descriptions.Item>
        <Descriptions.Item label="Population">
          {this.state.item.population}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}
const divStyle = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column"
};
