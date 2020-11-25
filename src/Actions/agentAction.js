import {
    GET_AGENTS,
    AGENTS,
    GET_AGENTS_ERR,
    AGENT,
    GET_AGENT,
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
export const getAgent = (id) => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: GET_AGENT })

    API.get(`/agency/agent/${id}`, { headers: { Authorization: `Bearer ${userToken}` } })
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