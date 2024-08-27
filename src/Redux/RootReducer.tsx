import { combineReducers } from "redux";
import { detailReducer } from "./Reducer";
import { SelectVariations } from "./Action";
export const RootReducer=combineReducers({
    detailReducer:detailReducer,
    
})