import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((counter, item) => {
      return counter + item.quantity;
    }, 0)
);

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((counter, item) => {
    return counter + item.quantity * item.price;
  }, 0)
);
