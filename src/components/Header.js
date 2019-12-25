import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  const Login = () => {
    return (
      <div>
        <span>{props.login}</span>
        <button onClick={props.logout}>Log out</button>
      </div>
    );
  };
  return (
    <header className="header">
      <p className="header__logo">Public</p>

      <div className="header__login">
        {props.isAuth ? <Login /> : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
