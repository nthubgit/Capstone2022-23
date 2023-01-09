import { combineReducers } from "redux";
import accounts from "./accounts";
import products from "./products";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  accounts,
  products,
  auth,
  message,
});
