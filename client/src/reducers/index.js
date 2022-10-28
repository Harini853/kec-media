import { combineReducers } from "redux";
import authReducer from './auth'
import detailsReducer from "./details";
import currentUserReducer from "./currentUser";
import postReducer from "./post";
import usersReducer from "./user";
export default combineReducers({
    authReducer,
    currentUserReducer,
    postReducer,
    detailsReducer,
    usersReducer
})