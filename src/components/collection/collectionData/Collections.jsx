import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import classes from "../collectionData/Collection.scss";

const collection = ({ id, title, items, imageUrl }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="collection-items">
        {items
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })
          .filter((item, index) => index < 4)}
      </div>
    </div>
  );
};

export default collection;
