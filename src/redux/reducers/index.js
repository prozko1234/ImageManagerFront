import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({ accountReducer, imageReducer });

export default rootReducer;
