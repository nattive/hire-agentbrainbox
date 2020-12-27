import {
    REDIRECT,
    AUTH_REDIRECT
} from "../Actions/types";

const initialState = {
    link: null,
    auth_link: null,
    States: [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
    ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REDIRECT:
            return {
                ...state,
                link: action.payload,

            };
        case AUTH_REDIRECT:
            return {
                ...state,
                auth_link: action.payload,

            };

        default:
            return state;
    }
}