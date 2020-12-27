import {
    SEND_MESSAGE,
    MESSAGE_SENT,
    MESSAGE_SENT_ERROR,
    GET_CHATS,
    CHATS,
    CHATS_ERROR,
    CHANNELS,
    ALL_MESSAGES,
    GET_ALL_MESSAGES,
    GET_ALL_MESSAGES_ERROR,
    GET_MESSAGE,
    MESSAGE,
    MESSAGE_ERROR,
    SEND_REPLY,
    REPLY,
    REPLY_ERR,
} from "./types";
import API from "../Constants/API";
import { token } from "../Constants/constant";

export const sendMessage = (data) => dispatch => {
    const userToken = localStorage.getItem(token)
    const {
        message,
        reciever_id
    } = data
    dispatch({ type: SEND_MESSAGE })

    API.post('/chat', {
            message,
            reciever_id
        }, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: MESSAGE_SENT,
                payload: response.data
            })

        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: MESSAGE_SENT_ERROR,
                payload: err.response
            })
        })
}
export const getChats = () => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_CHATS })

    API.get('/chat/all', { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: CHATS,
                payload: response.data
            })
            if (response.data.length > 0) {
                let channelMap = []
                response.data.map(chat => {
                    channelMap.push(chat.channel_id)
                })
                dispatch({ type: CHANNELS, payload: channelMap })
            }

        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: CHATS_ERROR,
                payload: err.response
            })
        })
}


export const getAllMessages = () => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_ALL_MESSAGES })

    API.get(`/message`, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: ALL_MESSAGES,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_ALL_MESSAGES_ERROR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const showMessage = (id) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_MESSAGE })

    API.get(`/message/${id}`, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: MESSAGE,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: MESSAGE_ERROR,
                payload: err.response.data || err.response.data.message || JSON.stringify(err)
            })
        })
}
export const replyMessage = (data) => dispatch => {
    const userToken = localStorage.getItem(token)
    const {
        receiver_Id,
        message,
        subject,
        message_name,
        message_id
    } = data
    dispatch({ type: SEND_REPLY })

    API.post('/message/reply', {
            receiver_Id,
            message,
            subject,
            message_name,
            re_message_id: message_id
        }, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: REPLY,
                payload: response.data
            })

        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: REPLY_ERR,
                payload: err.response
            })
        })
}