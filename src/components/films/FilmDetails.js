import React from "react";
import "antd/dist/antd.css";
import { Collapse, Icon } from "antd";

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

export default class FilmDetails extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    const number = this.props.match.params.number;
    fetch(`https://swapi.co/api/films/${number}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json });
      });
  }

  render() {
    return (
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header="This is panel header 1" style={customPanelStyle}>
          <p>{this.state.list.title}</p>
        </Panel>
        <Panel header="This is panel header 2" style={customPanelStyle}>
          <p>{this.state.list.title}</p>
        </Panel>
        <Panel header="This is panel header 3" style={customPanelStyle}>
          <p>{this.state.list.title}</p>
        </Panel>
      </Collapse>
    );
  }
}
