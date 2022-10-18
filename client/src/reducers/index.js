import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from "./currentUser";
import postReducer from "./post";
export default combineReducers({
    authReducer,
    currentUserReducer,
    postReducer
})