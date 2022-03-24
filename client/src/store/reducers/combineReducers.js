import { combineReducers } from "redux";
import authReducer from "./auth";
import hotels from "./hotels";
export default combineReducers({
    auth:authReducer,
    hotels:hotels
});