import {
    GET_AGENTS,
    AGENTS,
    GET_AGENTS_ERR,
    GET_AGENT,
    AGENT,
    GET_AGENT_ERR,
} from "../Actions/types";

const initialState = {
    gettingAgents: false,
    agents: [],
    agent: {},
    agentError: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_AGENTS:
            return {
                ...state,
                gettingAgents: true,
                agentError: null
            }
        case AGENTS:
            return {
                ...state,
                gettingAgents: false,
                agents: action.payload,
                agentError: null


            };
        case GET_AGENTS_ERR:
            return {
                ...state,
                gettingAgents: false,
                agentError: action.payload
            };
        case GET_AGENT:
            return {
                ...state,
                gettingAgents: true,
                agentError: null
            }
        case AGENT:
            return {
                ...state,
                gettingAgents: false,
                agent: action.payload,
                agentError: null


            };
        case GET_AGENT_ERR:
            return {
                ...state,
                gettingAgents: false,
                agentError: action.payload


            };

        default:
            return state;
    }
}