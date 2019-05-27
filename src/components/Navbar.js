import React from "react";
import "antd/dist/antd.css";
//import { NavLink } from "react-router-dom";
//import "./index.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Link
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Link to="/people">People</Link>
          <Link to="/planets">Planets</Link>
        </Link>
      </Header>
    </Layout>
  );
};

export default Navbar;

//           <NavLink to="/people">Planets</NavLink>
//           <NavLink to="/people">Films</NavLink>
//           <NavLink to="/people">Species</NavLink>
//           <NavLink to="/people">Vehicles</NavLink>
//           <NavLink to="/people">Starships</NavLink>
