import React from "react";
import spinner from "./img/Spinner-0.8s-231px.svg";
import "./Preloader.css";

const Preloader = props => {
  return (
    <div className="preloader">
      <img className="users__load" src={spinner} alt="preloader"></img>
    </div>
  );
};
export default Preloader;
