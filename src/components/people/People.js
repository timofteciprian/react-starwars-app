import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { List, Pagination } from "antd";

export default class People extends React.Component {
  state = {
    list: [],
    count: 0,
    pageNumber: 1
  };

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData = pageNumber => {
    fetch(`https://swapi.co/api/people/?page=${pageNumber}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results, count: json.count });
      });
  };

  onChange = page => {
    console.log(page);
    this.setState({
      pageNumber: page
    });
    this.fetchData(page);
  };

  render() {
    return (
      <div style={divStyle}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item key={item.name}>
              <Link to={`/people/${index + 1}`}>{item.name}</Link>
            </List.Item>
          )}
        />
        <Pagination
          current={this.state.pageNumber}
          onChange={this.onChange}
          total={this.state.count}
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
