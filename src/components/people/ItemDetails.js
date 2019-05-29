import React from "react";
import "antd/dist/antd.css";
import { Descriptions, Spin, List } from "antd";
import { Link } from "react-router-dom";

export default class ItemDetails extends React.Component {
  state = {
    item: {},
    loading: false,
    films: [],
    species: []
  };

  componentDidMount() {
    const numberPeople = this.props.match.params.numberPeople;
    fetch(`https://swapi.co/api/people/${numberPeople}`)
      .then(res => res.json())
      .then(async json => {
        this.setState({ item: json, loading: true });
        const promisesFilm = json.films.map(filmUrl => fetch(filmUrl));
        const responsesFilm = await Promise.all(promisesFilm);
        const films = await Promise.all(
          responsesFilm.map(response => response.json())
        );
        const promisesSpecies = json.species.map(speciesUrl =>
          fetch(speciesUrl)
        );
        const responsesSpecies = await Promise.all(promisesSpecies);
        const species = await Promise.all(
          responsesSpecies.map(response => response.json())
        );
        this.setState({ films: films, species: species });
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
      <div>
        <Descriptions title="Details">
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
        <h3 style={{ margin: "16px 0" }}>Films</h3>
        <List
          size="small"
          bordered
          dataSource={this.state.films}
          renderItem={itemF => (
            <List.Item>
              <Link to={`/films/${itemF.url.split("films/")[1].split("/")[0]}`}>
                {itemF.title}
              </Link>
            </List.Item>
          )}
        />
        <h3 style={{ margin: "16px 0" }}>Species</h3>
        <List
          size="small"
          bordered
          dataSource={this.state.species}
          renderItem={itemS => (
            <List.Item>
              <Link
                to={`/species/${itemS.url.split("species/")[1].split("/")[0]}`}
              >
                {itemS.name}
              </Link>
            </List.Item>
          )}
        />
      </div>
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
