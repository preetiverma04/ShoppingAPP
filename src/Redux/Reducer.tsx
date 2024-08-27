import { SelectVariations } from "./Action";
import { ADD_TO_DETAILS, SELECT_TO_VARIATIONS } from "./Constants"

const InitialState = {
    selectedItem: [],
    SelectVariations:[]
}
export const detailReducer = (state = InitialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_TO_DETAILS:
            return {
                ...state,
                selectedItem: action.payload,
            }
            case SELECT_TO_VARIATIONS:
                return{
                    ...state,
                    SelectVariations:action.payload,
                }
        default:
            return state;

    }
};