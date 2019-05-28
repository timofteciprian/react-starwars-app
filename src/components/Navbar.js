import React from "react";
import "antd/dist/antd.css";
//import { NavLink } from "react-router-dom";
//import "./index.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item>
            <Link to="/" exact>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/people">People</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/planets">Planets</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/films">Films</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/species">Species</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/vehicles">Vehicles</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/starships">Starships</Link>
          </Menu.Item>
        </Menu>
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
