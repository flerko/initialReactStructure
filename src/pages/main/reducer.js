import { TEST } from "./actionTypes";

let initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case TEST: {
            return {
                ...state,
                data: action.gettingData,
            }
        }
        default: {
            return state
        }
    }
}