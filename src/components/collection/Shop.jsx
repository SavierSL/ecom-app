import React, { Component } from "react";
import CollectionData from "./collectionData/CollectionData";
import Collections from "../collection/collectionData/Collections";
import Category from "../collection/collectionItem/Category";
import { Route } from "react-router-dom";
import CategoryPage from "../collection/collectionItem/categoryPages/CategoryPage";

const collectionPrev = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <Route exact path={`${match.path}`} component={Category} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default collectionPrev;
