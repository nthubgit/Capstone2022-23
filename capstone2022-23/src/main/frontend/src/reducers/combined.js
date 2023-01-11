import { combineReducers } from "redux";
import accounts from "./accounts";
import filters from "./filters";
import products from "./products";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  accounts,
  products,
  filters,
  auth,
  message,
});
