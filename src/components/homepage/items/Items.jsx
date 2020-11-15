import React from "react";
import Item from "../items/item/Item";
import classes from "../items/items.scss";

const items = ({ item }) => {
  return (
    <div className="item-container">
      {item.map(({ id, title, imageUrl, size, linkUrl }) => {
        return (
          <Item
            key={id}
            title={title}
            bg={imageUrl}
            size={size}
            link={linkUrl}
          />
        );
      })}
    </div>
  );
};

export default items;
