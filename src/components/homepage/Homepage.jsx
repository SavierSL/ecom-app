import React, { Component } from "react";
import Items from "../homepage/items/Items";
import classes from "../homepage/homepage.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSection } from "../../redux/user/director/DirectorSelector";

const homePage = ({ section }) => {
  return (
    <div className="home-page">
      <Items item={section} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: selectSection,
});
export default connect(mapStateToProps)(homePage);
