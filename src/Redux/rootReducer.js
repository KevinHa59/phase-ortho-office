import { combineReducers } from "redux";
import Menu from "./reducers/Menu";

const rootReducer = combineReducers({
  Menu: Menu,
});

export default rootReducer;
