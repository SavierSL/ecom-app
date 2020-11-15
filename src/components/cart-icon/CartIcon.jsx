import React from "react";
import classes from "../cart-icon/CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/CartActions";
import { selectCartQuantity } from "../../redux/cart/cartSelector/CartSelector";

const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartQuantity(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
