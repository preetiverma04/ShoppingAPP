import { combineReducers } from "redux";
import { detailReducer } from "./Reducer";
export const RootReducer=combineReducers({
    detailReducer:detailReducer,
})