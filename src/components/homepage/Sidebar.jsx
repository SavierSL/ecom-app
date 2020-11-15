import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../navigator/Nav.scss";
const nav = (props) => {
  console.log(props);
  return (
    <div className="nav-container">
      <h2>E.SAVE</h2>
      <div className="link-container"></div>
    </div>
  );
};

export default nav;
