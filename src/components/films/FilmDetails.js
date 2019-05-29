import React from "react";
import "antd/dist/antd.css";
import { Descriptions, Spin, List, Collapse } from "antd";
import { Link } from "react-router-dom";

const Panel = Collapse.Panel;

export default class FilmDetails extends React.Component {
  state = {
    item: {},
    loading: false,
    starships: [],
    people: [],
    planets: [],
    vehicles: [],
    species: []
  };

  componentDidMount() {
    const numberFilm = this.props.match.params.numberFilm;
    fetch(`https://swapi.co/api/films/${numberFilm}`)
      .then(res => res.json())
      .then(async json => {
        this.setState({ item: json, loading: true });
        const promises = json.starships.map(starshipsUrl =>
          fetch(starshipsUrl)
        );
        const responses = await Promise.all(promises);
        const starships = await Promise.all(
          responses.map(response => response.json())
        );
        const promisesPeople = json.characters.map(peopleUrl =>
          fetch(peopleUrl)
        );
        const responsesPeople = await Promise.all(promisesPeople);
        const people = await Promise.all(
          responsesPeople.map(response => response.json())
        );
        const promisesPlanets = json.planets.map(planetsUrl =>
          fetch(planetsUrl)
        );
        const responsesPlanets = await Promise.all(promisesPlanets);
        const planets = await Promise.all(
          responsesPlanets.map(response => response.json())
        );
        const promisesVehicles = json.vehicles.map(vehiclesUrl =>
          fetch(vehiclesUrl)
        );
        const responsesVehicles = await Promise.all(promisesVehicles);
        const vehicles = await Promise.all(
          responsesVehicles.map(response => response.json())
        );
        const promisesSpecies = json.species.map(speciesUrl =>
          fetch(speciesUrl)
        );
        const responsesSpecies = await Promise.all(promisesSpecies);
        const species = await Promise.all(
          responsesSpecies.map(response => response.json())
        );
        this.setState({ starships, people, planets, vehicles, species });
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
          <Descriptions.Item label="Producer">
            {this.state.item.producer}
          </Descriptions.Item>
          <Descriptions.Item label="Release Date">
            {this.state.item.release_date}
          </Descriptions.Item>
        </Descriptions>
        <Collapse accordion>
          <Panel header="Characters" key="1">
            <List
              size="small"
              bordered
              dataSource={this.state.people}
              renderItem={itemPeople => (
                <List.Item>
                  <Link
                    to={`/people/${
                      itemPeople.url.split("people/")[1].split("/")[0]
                    }`}
                  >
                    {itemPeople.name}
                  </Link>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
        <Collapse accordion>
          <Panel header="Planets" key="1">
            <List
              size="small"
              bordered
              dataSource={this.state.planets}
              renderItem={itemS => (
                <List.Item>
                  <Link
                    to={`/planets/${
                      itemS.url.split("planets/")[1].split("/")[0]
                    }`}
                  >
                    {itemS.name}
                  </Link>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
        <Collapse accordion>
          <Panel header="Starships" key="1">
            <List
              size="small"
              bordered
              dataSource={this.state.starships}
              renderItem={itemS => (
                <List.Item>
                  <Link
                    to={`/starships/${
                      itemS.url.split("starships/")[1].split("/")[0]
                    }`}
                  >
                    {itemS.name}
                  </Link>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
        <Collapse accordion>
          <Panel header="Vehicles" key="1">
            <List
              size="small"
              bordered
              dataSource={this.state.vehicles}
              renderItem={itemVehicles => (
                <List.Item>
                  <Link
                    to={`/vehicles/${
                      itemVehicles.url.split("vehicles/")[1].split("/")[0]
                    }`}
                  >
                    {itemVehicles.name}
                  </Link>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
        <Collapse accordion>
          <Panel header="Species" key="1">
            <List
              size="small"
              bordered
              dataSource={this.state.species}
              renderItem={itemSpecies => (
                <List.Item>
                  <Link
                    to={`/species/${
                      itemSpecies.url.split("species/")[1].split("/")[0]
                    }`}
                  >
                    {itemSpecies.name}
                  </Link>
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
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
