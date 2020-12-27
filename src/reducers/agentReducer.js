import {
    GET_AGENTS,
    AGENTS,
    GET_AGENTS_ERR,
    GET_AGENT,
    AGENT,
    GET_AGENT_ERR,
    GET_BANNED_AGENT,
    BANNED_AGENT,
    GET_BANNED_AGENT_ERR,
    GET_AGENCIES,
    AGENCIES,
    GET_AGENCIES_ERR,
    GET_AGENCY,
    THE_AGENCY,
    AGENCY,
    GET_AGENCY_ERR,
} from "../Actions/types";

const initialState = {
    gettingAgents: false,
    agents: [],
    agent: {},
    agentError: null,
    agency: {},
    gettingAgency: false,
    agError: null,
    bannedAgents: [],
    gettingBannedAgent: false,
    bannendAgentError: null,
    gettingAgencies: false,
    agencies: [],
    agenciesErr: null
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
        case GET_AGENCIES:
            return {
                ...state,
                gettingAgencies: true,
                agenciesErr: null
            }
        case AGENCIES:
            return {
                ...state,
                gettingAgencies: false,
                agencies: action.payload,
                agenciesErr: null


            };
        case GET_AGENCIES_ERR:
            return {
                ...state,
                gettingAgencies: false,
                agenciesErr: action.payload
            };



        case GET_AGENCY:
            return {
                ...state,
                gettingAgency: true,
                agError: null
            }
        case THE_AGENCY:
            return {
                ...state,
                gettingAgency: false,
                agency: action.payload,
                agError: null


            };
        case GET_AGENCY_ERR:
            return {
                ...state,
                gettingAgency: false,
                agError: action.payload
            };
        case GET_BANNED_AGENT:
            return {
                ...state,
                gettingBannedAgent: true,
                bannendAgentError: null
            }

        case BANNED_AGENT:
            return {
                ...state,
                gettingBannedAgent: false,
                bannedAgents: action.payload,
                bannendAgentError: null


            };
        case GET_BANNED_AGENT_ERR:
            return {
                ...state,
                gettingBannedAgent: false,
                bannendAgentError: action.payload


            };

        default:
            return state;
    }
}