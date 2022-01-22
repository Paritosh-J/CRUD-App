import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          CRUD App
        </a>
        <div style={{marginLeft: '5rem'}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link
            className="btn btn-outline-light"
            style={{
              marginRight: "5px",
            }}
            to="/users/add"
          >
            Add User
          </Link>
          <Link className="btn btn-outline-light" to="/users/view">
            View Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
