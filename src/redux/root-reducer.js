import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directorReducer from "./user/director/DirectorReducer";
import userReducer from "./user/User.reducer";
import cartReducers from "../redux/cart/CartReducers";
import shopDataReducer from "../redux/shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducers,
  director: directorReducer,
  shop: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
