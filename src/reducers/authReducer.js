import {
    LOGIN,
    ERROR_LOGGING,
    USER,
    REGISTER_USER,
    REGISTRATION_ERROR,
    CREATE_AGENCY,
    AGENCY,
    ERROR_CREATING_AGENCY,
} from "../Actions/types";

const initialState = {
    /****Registration****/
    registerStatus: null,
    isLoggingIn: false,
    authenticating: true,
    user: {},
    isRegistering: false,
    registrationError: null,
    loginError: null,
    /**********************/
    creatingAgency: false,
    agency: {},
    agencyError: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: {},
                isRegistering: true,
                registrationError: null,
            };
        case LOGIN:
            return {
                ...state,
                isLoggingIn: true,
                loginError: null,
            };
        case ERROR_LOGGING:
            return {
                ...state,
                isLoggingIn: false,
                loginError: action.payload,

            };
        case USER:
            return {
                ...state,
                isLoggingIn: false,
                authenticating: false,
                user: action.payload,
                isRegistering: false,
                registrationError: null,
            };
        case REGISTRATION_ERROR:
            return {
                ...state,
                isRegistering: false,
                registrationError: action.payload,

            };
        case CREATE_AGENCY:
            return {
                ...state,
                creatingAgency: true,
                agencyError: null,

            };
        case AGENCY:
            return {
                ...state,
                creatingAgency: false,
                agency: action.payload,

            };
        case ERROR_CREATING_AGENCY:
            return {
                ...state,
                creatingAgency: false,
                agencyError: action.payload,

            };

        default:
            return state;
    }
}