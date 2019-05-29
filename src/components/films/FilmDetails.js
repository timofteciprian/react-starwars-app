import React from "react";
import "antd/dist/antd.css";
import { Descriptions } from "antd";

export default class FilmDetails extends React.Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const numberFilm = this.props.match.params.numberFilm;
    console.log(this.props.match);
    fetch(`https://swapi.co/api/films/${numberFilm}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ item: json });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.item.title}</h1>
        <h2>Description</h2>
        <p>{this.state.item.opening_crawl}</p>
        <Descriptions bordered>
          <Descriptions.Item label="Episode">
            {this.state.item.episode_id}
          </Descriptions.Item>

          <Descriptions.Item label="Director">
            {this.state.item.director}
          </Descriptions.Item>
          <Descriptions.Item label="roducer">
            {this.state.item.producer}
          </Descriptions.Item>

          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication_factor:3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}
