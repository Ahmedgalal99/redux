import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userRed from "./userReduser";

export default combineReducers({
  Num: counterReducer,
  user: userRed,
});
