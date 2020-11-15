import {
  TOGGLE_CART,
  ADD_ITEM,
  MINUS_QTY,
  ADD_QTY,
  REMOVE_ITEM,
} from "../cart/CartTypes";

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const minusQty = (item) => ({
  type: MINUS_QTY,
  payload: item,
});

export const addQty = (item) => ({
  type: MINUS_QTY,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
