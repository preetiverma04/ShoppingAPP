import { ADD_TO_DETAILS } from "./Constants";

export const AddToDetails = (item:any) => {
    return {
        type: ADD_TO_DETAILS,
        payload: item,
    };
};
