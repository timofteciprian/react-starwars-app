import React from "react";
import "antd/dist/antd.css";
//import "./index.css";
import { Descriptions } from "antd";

export default class ItemDetails extends React.Component {
  state = {
    list: []
  };

  // async componentDidMount() {
  //   const number = this.props.match.params.number;
  //   console.log(number);
  //   const response = await fetch(`https://swapi.co/api/people/${number}`);
  //   const data = await response.json();
  //   this.setState({ list: data });
  // }

  componentDidMount() {
    const number = this.props.match.params.number;
    fetch(`https://swapi.co/api/people/${number}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
      });
  }

  render() {
    return (
      <Descriptions title="User Info">
        <Descriptions.Item label="Name">
          {this.state.list.name}
        </Descriptions.Item>
        <Descriptions.Item label="Height">
          {this.state.list.height}
        </Descriptions.Item>
        <Descriptions.Item label="Mass">
          {this.state.list.mass}
        </Descriptions.Item>
        <Descriptions.Item label="Hair Color">
          {this.state.list.hair_color}
        </Descriptions.Item>
        <Descriptions.Item label="Skin Color">
          {this.state.list.skin_color}
        </Descriptions.Item>
        <Descriptions.Item label="Eye Color">
          {this.state.list.eye_color}
        </Descriptions.Item>
        <Descriptions.Item label="Birth Year">
          {this.state.list.birth_year}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {this.state.list.gender}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}
