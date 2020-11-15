import React from "react";
import classes from "../cart/CartDropDown.scss";
import Button from "../customButton/Button";
import { connect } from "react-redux";
import CartItem from "./CartIten";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/CartActions";

const cart = ({ cartItems, history, toggleCart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <div className="cart-item"></div>
        {cartItems.map(({ id, ...item }) => {
          return <CartItem key={id} {...item} />;
        })}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          toggleCart();
        }}
      >
        CHECK OUT
      </Button>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(cart));
