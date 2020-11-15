import React from "react";
import classes from "../page/Checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTotal } from "../../redux/cart/cartSelector/CartSelector";
import { selectCartItems } from "../../redux/cart/cartSelector/CartSelector";
import { toggleCart } from "../../redux/cart/CartActions";
import CheckOutItem from "../../components/page/CheckOutItem";

const checkout = ({ total, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckOutItem key={item.id} item={item} />;
      })}
      <div className="total">TOTAL: $ {total}</div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps)(checkout);
