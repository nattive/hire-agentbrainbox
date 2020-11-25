import { combineReducers } from 'redux'
import authReducer from './authReducer'
import generalReducer from './generalReducer'
import agentReducer from './agentReducer'

export default combineReducers({
    auth: authReducer,
    general: generalReducer,
    agent: agentReducer,
})