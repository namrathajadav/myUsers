import { combineReducers } from "redux";
import fetchUsersReducer from "./FetchUsers/FetchUsersReducer";

const rootReducer=combineReducers({
    Users:fetchUsersReducer

})


export default rootReducer;