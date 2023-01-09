import { combineReducers } from "redux";
import state from "./accounts";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  state,
  auth,
  message,
});
