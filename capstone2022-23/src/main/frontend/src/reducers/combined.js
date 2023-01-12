import { combineReducers } from "redux";
import accounts from "./accounts";
import filters from "./filters";
import products from "./products";
import auth from "./auth";
import message from "./message";
import reviews from "./reviews";

export default combineReducers({
  accounts,
  products,
  filters,
  reviews,
  auth,
  message,
});
