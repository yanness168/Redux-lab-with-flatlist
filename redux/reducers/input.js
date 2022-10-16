import { INPUT_VALUE } from "../actionTypes";
import { CLEAR_INPUT } from "../actionTypes";
import { ADD_VALUE } from "../actionTypes";

const initialstate = {
    strings: [],
    text: "",
};

export default function (state = initialstate, action){
    switch(action.type){
        case INPUT_VALUE:{
            return{
                ...state,
                text: action.receive
            }
        }
        case CLEAR_INPUT:{
            return{
                ...state,
                text: ""
            };
        }
        case ADD_VALUE: {
            const value = action.payload.append;
            return{
                ...state,
                strings:[...state.strings, value]
            }
        }
        default:
            return state;
    }
}