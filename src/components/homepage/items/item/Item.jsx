import React from "react";
import classes from "../item/item.scss";
import { withRouter } from "react-router-dom";

const item = ({ size, bg, title, history, link, match }) => {
  return (
    <div
      className={`${size} item`}
      onClick={() => history.push(`${match.url}${link}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default withRouter(item);
