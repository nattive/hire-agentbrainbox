import {
    LOGIN,
    REDIRECT,
    STOP_LOGGING,
    ERROR_LOGGING,
    USER,
    AGENCY
} from "./types";
import API from "../Constants/API";
import { token } from "../Constants/constant";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import store from "../Constants/store";



export const login = (email, password) => dispatch => {
    dispatch({ type: LOGIN })
    API.post('/auth/login', { email, password })
        .then(response => {
            console.log(response.data.data.user)
            localStorage.removeItem(token)
            localStorage.setItem(token, response.data.data.token)
            dispatch({
                type: USER,
                payload: response.data.data.user
            })
            dispatch({
                type: AGENCY,
                payload: response.data.data.user.agency
            })
            dispatch({ type: REDIRECT, payload: '/' })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: ERROR_LOGGING,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const handleRedirect = (user) => dispatch => {
    console.log(user);
    // if (!user.agency) {
    //     dispatch({ type: REDIRECT, payload: '/auth/create-agency' })
    // } else {
    //     window.location.href = 'http://localhost:3001/login'

    // }
    dispatch({ type: REDIRECT, payload: store.getState().general.auth_link })

}

export const logout = () => dispatch => {
    dispatch({ type: LOGIN })
    API.get('/auth/logout')
        .then(response => {
            localStorage.removeItem(token)
        })
        .catch(err => {
            console.log(err.response)
            dispatch({
                type: ERROR_LOGGING,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}

export const me = () => dispatch => {
    const userToken = localStorage.getItem(token)
    dispatch({ type: LOGIN })

    API.get('/auth/me', { headers: { Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data)

            dispatch({
                type: USER,
                payload: response.data.user
            })
            dispatch({
                type: AGENCY,
                payload: response.data.user.agency
            })
        })
        .catch(err => {
            console.log(err.response)
            window.location.href = '/'

            dispatch({
                type: ERROR_LOGGING,
                payload: err.response ? err.response.data.errors || err.response.data.message : JSON.stringify(err)
            })
        })
}