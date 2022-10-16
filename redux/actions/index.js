import { ADD_VALUE } from "../actionTypes/index";
import { INPUT_VALUE } from "../actionTypes/index";
import { CLEAR_INPUT } from "../actionTypes/index";

export const input_v = text =>({
    type: INPUT_VALUE,
    receive: text
});
export const add_v = string =>({
    type: ADD_VALUE,
    payload:{
        append: string
    }
});
export const clear_input = () =>({
    type: CLEAR_INPUT,
    payload: {
        clear: ''
    }
});


/* export const decrease = value =>({
    type: COUNTER_DECREASE,
    payload: {
        decreament: value
    }
}); */

