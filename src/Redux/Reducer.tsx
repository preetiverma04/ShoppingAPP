import { ADD_TO_DETAILS } from "./Constants"

const InitialState={
    selectedItem:[],
}
export const detailReducer=(state=InitialState,action: { type: any; payload: any; })=>{
    switch(action.type){
        case ADD_TO_DETAILS:
            return {
                ...state,
                selectedItem:action.payload,        
    }
            default:
                return state;

}};