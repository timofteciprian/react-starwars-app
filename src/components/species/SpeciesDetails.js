import React from "react";
import "antd/dist/antd.css";
import { Descriptions, Spin } from "antd";

export default class SpeciesDetails extends React.Component {
  state = {
    item: {},
    loading: false
  };

  componentDidMount() {
    const numberSpecies = this.props.match.params.numberSpecies;
    fetch(`https://swapi.co/api/species/${numberSpecies}`)
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
        <Descriptions.Item label="Classification">
          {this.state.item.classification}
        </Descriptions.Item>
        <Descriptions.Item label="Designation">
          {this.state.item.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Average Height">
          {this.state.item.average_height}
        </Descriptions.Item>
        <Descriptions.Item label="Skin Colors">
          {this.state.item.skin_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Hair Colors">
          {this.state.item.hair_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Eye Colors">
          {this.state.item.eye_colors}
        </Descriptions.Item>
        <Descriptions.Item label="Average Lifespan">
          {this.state.item.average_lifespan}
        </Descriptions.Item>
        <Descriptions.Item label="Homeworld">
          {this.state.item.homeworld}
        </Descriptions.Item>
        <Descriptions.Item label="Language">
          {this.state.item.language}
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
