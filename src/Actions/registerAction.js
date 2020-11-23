import {
    REGISTER_USER,
    USER,
    REGISTRATION_ERROR,
    CREATE_AGENCY,
    AGENCY,
    ERROR_CREATING_AGENCY,

} from "./types";
import API from "../Constants/API";
import { token } from "../Constants/constant";
import { handleRedirect } from './loginAction'
export const registerUser = (credentials) => dispatch => {
    dispatch({ type: REGISTER_USER })
    const {
        name,
        email,
        phone,
        country,
        state,
        city,
        address,
        password,
        confirm_password,
    } = credentials;
    API.post('/auth/register', {
            name,
            email,
            phone,
            country,
            state,
            city,
            address,
            password,
            confirm_password,
        })
        .then(response => {
            console.log(response.data)
            localStorage.removeItem(token)
            localStorage.setItem(token, response.data.data.token)
            dispatch({
                type: USER,
                payload: response.data.data.user
            })
            dispatch(handleRedirect(response.data.data.user))

        })
        .catch(err => {
            console.log(err.response)
            alert(err.response ? err.response.data && JSON.stringify(err.response.data.errors) : 'An error occurredd')
            dispatch({
                type: REGISTRATION_ERROR,
                payload: err.response && err.response.data
            })
        })
}

export const registerAgency = (credentials) => dispatch => {
    dispatch({ type: CREATE_AGENCY })
    const userToken = localStorage.getItem(token)
    const formData = new FormData()
    formData.append('agency_name', credentials.agency_name)
    formData.append('agency_email', credentials.agency_email)
    formData.append('agency_phone', credentials.agency_phone)
    formData.append('agency_website', credentials.agency_website)
    formData.append('country', credentials.country)
    formData.append('state', credentials.state)
    formData.append('city', credentials.city)
    formData.append('agency_map_cord', credentials.agency_map_cord)
    formData.append('agency_about', credentials.agency_about)
    formData.append('CAC', credentials.CAC)
    formData.append('agency_found_year', credentials.agency_found_year)
    formData.append('agency_address', credentials.agency_address)
    formData.append('has_training_facility', credentials.has_training_facility === true ? 1 : 0)
    API.post('/agency/profile', formData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${userToken}` } })
        .then(response => {
            console.log(response.data.agency)
            dispatch({
                type: AGENCY,
                payload: response.data.agency
            })
        })
        .catch(err => {
            // alert(err.response ? err.response.message || err.response.data && JSON.stringify(err.response.data.errors || err) : 'An error occurred')

            console.log(err)
            dispatch({
                type: ERROR_CREATING_AGENCY,
                payload: err
            })
        })
}