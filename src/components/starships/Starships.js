import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { List, Pagination, Spin } from "antd";

export default class StarshipDetails extends React.Component {
  state = {
    list: [],
    count: 0,
    pageNumber: 1,
    loading: false
  };

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData = pageNumber => {
    fetch(`https://swapi.co/api/starships/?page=${pageNumber}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ list: json.results, count: json.count, loading: true });
      });
  };

  onChange = page => {
    this.setState({
      pageNumber: page
    });
    this.fetchData(page);
  };

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
      <div style={divStyle}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item key={item.name}>
              <Link
                to={`/starships/${
                  item.url.split("starships/")[1].split("/")[0]
                }`}
              >
                {item.name}
              </Link>
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
