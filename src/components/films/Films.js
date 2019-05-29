import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Collapse, Icon, Spin } from "antd";
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
    list: [],
    loading: false
  };

  componentDidMount() {
    fetch("https://swapi.co/api/films/")
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results, loading: true });
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
    return this.state.list.map((item, index) => (
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header={item.title} style={customPanelStyle}>
          <Link to={`/films/${item.url.split("films/")[1].split("/")[0]}`}>
            Details
          </Link>
          <p>{item.opening_crawl}</p>
        </Panel>
      </Collapse>
    ));
  }
}

const divStyle = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column"
};
