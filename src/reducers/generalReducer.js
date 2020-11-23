import {
    REDIRECT
} from "../Actions/types";

const initialState = {
    link: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REDIRECT:
            return {
                ...state,
                link: action.payload,

            };

        default:
            return state;
    }
}