import {
  TOGGLE_CART,
  ADD_ITEM,
  ADD_QTY,
  MINUS_QTY,
  REMOVE_ITEM,
} from "../cart/CartTypes";

import { addCart, minusQty } from "../cart/CartUtil";
const initialState = {
  hidden: true,
  cartItems: [],
};
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addCart(state.cartItems, action.payload),
      };
    case MINUS_QTY:
      return {
        ...state,
        cartItems: minusQty(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducers;
