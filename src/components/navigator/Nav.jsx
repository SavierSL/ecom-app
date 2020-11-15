import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../navigator/Nav.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../components/firebase/FirebaseUtil";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelector/CartSelector";
import { selectCurrentUser } from "../../redux/user/userSelector/UserSelector";
const nav = ({ currentUser, hidden }) => {
  console.log(auth);
  console.log(hidden);
  return (
    <div className="nav-container">
      <Logo />
      <div className="link-container">
        <NavLink className="NavLink" exact to={`/`} activeClassName="active">
          <h4 className="texts">HOME</h4>
        </NavLink>
        <NavLink className="NavLink" to={`/shop`} activeClassName="active">
          <h4 className="texts">SHOP</h4>
        </NavLink>
        <NavLink className="NavLink" to={`/orders`} activeClassName="active">
          <h4 className="texts"> CART</h4>
        </NavLink>

        {currentUser ? (
          <NavLink
            className="NavLink"
            to={`/sign-in`}
            activeClassName="active"
            onClick={() => auth.signOut()}
          >
            <h4 className="texts"> SIGN OUT </h4>
          </NavLink>
        ) : (
          <NavLink className="NavLink" to={`/sign-in`} activeClassName="active">
            <h4 className="texts"> SIGN IN </h4>
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(nav);
