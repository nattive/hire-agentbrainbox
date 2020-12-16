import {
    MESSGAE_AGENT,
    CHANNELS,
    GET_CHATS,
    CHATS,
    CHATS_ERROR,
    CHAT_MESSAGES,
    ALL_MESSAGES,
    GET_ALL_MESSAGES,
    GET_ALL_MESSAGES_ERROR,
    GET_MESSAGE,
    MESSAGE,
    MESSAGE_ERROR,
    SEND_REPLY,
    REPLY,
    REPLY_ERR,
} from "../Actions/types";

const initialState = {
    reciever: {},
    channels: [],
    chatMessages: [],
    msg: {},
    gettingMessage: false,
    chats: [],
    chatError: null,
    gettingAllMessages: false,
    messages: [],
    messageError: null,
    gettingChats: false,
    sendingReply: false,
    replySent: false,
    replySentError: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MESSGAE_AGENT:
            return {
                ...state,
                reciever: action.payload,

            };
        case CHAT_MESSAGES:
            return {
                ...state,
                chatMessages: action.payload,

            };
        case CHANNELS:
            return {
                ...state,
                channels: action.payload,
            };
        case GET_CHATS:
            return {
                ...state,
                chatError: null,
                gettingChats: true
            };
        case CHATS:
            return {
                ...state,
                chats: action.payload,
                chatError: null,
                gettingChats: false
            };
        case CHATS_ERROR:
            return {
                ...state,
                chatError: action.payload,
                gettingChats: false
            };
        case ALL_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                gettingAllMessages: false,
                messageError: null
            };
        case GET_ALL_MESSAGES:
            return {
                ...state,
                gettingAllMessages: true,
                messageError: null
            };
        case GET_ALL_MESSAGES_ERROR:
            return {
                ...state,
                messageError: action.payload,
                gettingAllMessages: false
            };
        case GET_MESSAGE:
            return {
                ...state,
                gettingMessage: true,
                messageError: null,
                msg: {},
            };
        case MESSAGE:
            return {
                ...state,
                msg: action.payload,
                gettingMessage: false,
                messageError: null
            };
        case MESSAGE_ERROR:
            return {
                ...state,
                messageError: action.payload,
                gettingMessage: false
            };
        case SEND_REPLY:
            return {
                ...state,
                sendingReply: true,
                replySent: false,
                replySentError: null,
            };
        case REPLY:
            return {
                ...state,
                sendingReply: false,
                replySent: true,
                replySentError: null,
            };
        case REPLY_ERR:
            return {
                ...state,
                sendingReply: false,
                replySent: false,
                replySentError: action.payload,
            };

        default:
            return state;
    }
}