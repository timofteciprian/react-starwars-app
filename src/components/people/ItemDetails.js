import React from "react";
import "antd/dist/antd.css";
//import "./index.css";
import { Descriptions } from "antd";

export default class ItemDetails extends React.Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const number = this.props.match.params.number;
    fetch(`https://swapi.co/api/people/${number}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ item: json });
      });
  }

  render() {
    return (
      <Descriptions title="User Info">
        <Descriptions.Item label="Name">
          {this.state.item.name}
        </Descriptions.Item>
        <Descriptions.Item label="Height">
          {this.state.item.height}
        </Descriptions.Item>
        <Descriptions.Item label="Mass">
          {this.state.item.mass}
        </Descriptions.Item>
        <Descriptions.Item label="Hair Color">
          {this.state.item.hair_color}
        </Descriptions.Item>
        <Descriptions.Item label="Skin Color">
          {this.state.item.skin_color}
        </Descriptions.Item>
        <Descriptions.Item label="Eye Color">
          {this.state.item.eye_color}
        </Descriptions.Item>
        <Descriptions.Item label="Birth Year">
          {this.state.item.birth_year}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {this.state.item.gender}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}
