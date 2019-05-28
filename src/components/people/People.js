import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { List } from "antd";
//import "./index.css";

export default class People extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results });
      });
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10
        }}
        dataSource={this.state.list}
        renderItem={(item, index) => (
          <List.Item key={item.title}>
            <Link to={`/people/${index + 1}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    );
  }
}

// this.state.list.map((item, index) => (
//   <div>
//     <Link to={`/people/${index + 1}`}>{item.name}</Link>
//   </div>
// ));
