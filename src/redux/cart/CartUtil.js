import cartItem from "../../components/cart/CartIten";

export const addCart = (cartItems, cartToAdd) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === cartToAdd.id
  );
  if (existingItems) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...cartToAdd, quantity: 1 }];
};

// export const removeItem = (cartItems, cartToRemove) => {
//   const itemToRemove = cartItems.find((cartItem) => {
//     return cartItem.id === cartToRemove.id;
//   });
//   if (itemToRemove) {
//     return cartItems.filter((cartItem) => {
//       return cartItem !== cartToRemove.id;
//     });
//   }
// };

export const minusQty = (cartItems, cartToAdd) => {
  const minusQty = cartItems.find((cartItem) => cartItem.id === cartToAdd.id);

  if (minusQty.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartToAdd.id);
  }

  if (minusQty) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};
