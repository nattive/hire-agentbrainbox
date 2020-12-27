import {
    GET_AGENTS,
    AGENTS,
    GET_AGENTS_ERR,
    AGENT,
    GET_AGENT,
    SEND_EMPLOYMT_ENQ,
    EMPLOYMT_ENQ_SENT,
    EMPLOYMT_ENQ_ERR,
    GET_BANNED_AGENT,
    BANNED_AGENT,
    GET_BANNED_AGENT_ERR,
    GET_AGENCIES,
    AGENCIES,
    GET_AGENCIES_ERR,
    GET_AGENCY,
    AGENCY,
    GET_AGENCY_ERR,
    THE_AGENCY,
    SEND_MESSAGE,
    MESSAGE_SENT,
    MESSAGE_SENT_ERROR,
    SEND_REPLY,
    REPLY,
    REPLY_ERR,
} from "./types";
import API from "../Constants/API";
import { token } from "../Constants/constant";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const getAgents = () => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENTS })

    API.get('/agent', { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: AGENTS,
                payload: response.data.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_AGENTS_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const getAgency = (id) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENCY })

    API.get(`/agency/${id}`, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {

            dispatch({
                type: THE_AGENCY,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_AGENCY_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const getAgencies = () => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENCIES })

    API.get('/agency', { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: AGENCIES,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_AGENCIES_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const getBannedAgents = () => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_BANNED_AGENT })

    API.get('/agent/banned', { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: BANNED_AGENT,
                payload: response.data.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_BANNED_AGENT_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const getAgentsByState = (state) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENTS })

    API.get(`/agent/state/${state}`, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: AGENTS,
                payload: response.data.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_AGENTS_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const getAgencyByState = (state) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENCIES })

    API.get(`/agency/state/${state}`, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: AGENCIES,
                payload: response.data.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_AGENCIES_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const getAgent = (id) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENT })

    API.get(`/agent/${id}`, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: AGENT,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: GET_AGENTS_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const sendAgentEnq = (id, extraMessage = null) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: SEND_REPLY })

    API.post(`/message/sendrequest/${id}`, { extraMessage }, { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: REPLY,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err.response)

            dispatch({
                type: REPLY_ERR,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}