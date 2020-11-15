import React from "react";
import classes from "../page/CheckOutItem.scss";
import { connect } from "react-redux";
import { minusQty, removeItem } from "../../redux/cart/CartActions";

const checkoutItem = ({ item, minusQty, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <span onClick={() => minusQty(item)}>- </span>
        {item.quantity}
        <span> +</span>
      </span>
      <span className="price">{item.price}</span>
      <span className="remove" onClick={() => removeItem(item)}>
        remove
      </span>
    </div>
  );
};
const mapDispatchToprops = (dispatch) => ({
  minusQty: (item) => dispatch(minusQty(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToprops)(checkoutItem);
