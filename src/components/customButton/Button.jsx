import React from "react";
import classes from "../customButton/Button.scss";

const button = ({ children, ...allProps }) => {
  return (
    <div>
      <button className="custom-button" {...allProps}>
        {" "}
        {children}{" "}
      </button>
    </div>
  );
};

export default button;
