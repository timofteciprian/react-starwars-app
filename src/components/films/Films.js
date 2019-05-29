import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Collapse, Icon } from "antd";
//import "./index.css";

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

export default class Films extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/films/")
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results });
      });
  }

  render() {
    return this.state.list.map((item, index) => (
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header={item.title} style={customPanelStyle}>
          <Link to={`/films/${index + 1}`}> Details</Link>
          <p>{item.opening_crawl}</p>
        </Panel>
      </Collapse>
    ));
  }
}
