import { ADD_TO_DETAILS, SELECT_TO_VARIATIONS } from "./Constants";

export const AddToDetails = (item:any) => {
    return {
        type: ADD_TO_DETAILS,
        payload: item,
    };
};
export const SelectVariations=(item:any)=>{
    return{
        type:SELECT_TO_VARIATIONS,
        payload:item
    }
}
