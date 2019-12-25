import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  return (
    <nav className="app__nav">
      <ul className="app__nav-list">
        <li className="app__item">
          <NavLink to="/profile" activeClassName="active" className="app__link">
            Profile
          </NavLink>
        </li>
        <li className="app__item">
          <NavLink
            to="/messages"
            activeClassName="active"
            className="app__link"
          >
            Messages
          </NavLink>
        </li>
        <li className="app__item">
          <NavLink to="/news" activeClassName="active" className="app__link">
            News
          </NavLink>
        </li>
        <li className="app__item">
          <NavLink to="/music" activeClassName="active" className="app__link">
            Music
          </NavLink>
        </li>
        <li className="app__item">
          <NavLink
            to="/settings"
            activeClassName="active"
            className="app__link"
          >
            Settings
          </NavLink>
        </li>
        <li className="app__item">
          <NavLink to="/users" activeClassName="active" className="app__link">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
