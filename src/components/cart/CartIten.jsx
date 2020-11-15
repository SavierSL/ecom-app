import React from "react";
import classes from "./CartItem.scss";

const cartItem = ({ id, imageUrl, name, price, quantity }) => {
  return (
    <div className="cart-item" key={id}>
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">
          {" "}
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default cartItem;
