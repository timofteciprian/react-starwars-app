import React from "react";
import "antd/dist/antd.css";
import { Descriptions, Spin } from "antd";

export default class SpeciesDetails extends React.Component {
  state = {
    item: {},
    loading: false
  };

  componentDidMount() {
    const numberStarship = this.props.match.params.numberStarship;
    console.log(this.props.match);
    fetch(`https://swapi.co/api/starships/${numberStarship}`)
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
        <Descriptions.Item label="Model">
          {this.state.item.model}
        </Descriptions.Item>
        <Descriptions.Item label="Manufacturer">
          {this.state.item.manufacturer}
        </Descriptions.Item>
        <Descriptions.Item label="Cost in credits">
          {this.state.item.cost_in_credits}
        </Descriptions.Item>
        <Descriptions.Item label="Length">
          {this.state.item.length}
        </Descriptions.Item>
        <Descriptions.Item label="Max atmosphering speed">
          {this.state.item.max_atmosphering_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Crew">
          {this.state.item.crew}
        </Descriptions.Item>
        <Descriptions.Item label="Passengers">
          {this.state.item.passengers}
        </Descriptions.Item>
        <Descriptions.Item label="Cargo Capacity">
          {this.state.item.cargo_capacity}
        </Descriptions.Item>
        <Descriptions.Item label="Consumables">
          {this.state.item.consumables}
        </Descriptions.Item>
        <Descriptions.Item label="Hyperdrive Rating">
          {this.state.item.hyperdrive_rating}
        </Descriptions.Item>
        <Descriptions.Item label="MGLT">
          {this.state.item.MGLT}
        </Descriptions.Item>
        <Descriptions.Item label="Starship class">
          {this.state.item.starship_class}
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
