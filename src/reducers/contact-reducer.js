import { Globals } from "../actions/constants";

const initialState = {
    contacts: [],
    contact: {},
    loading: false,
    error: null
}

export default (state = initialState, action = {}) => {
    console.log(action)
    switch(action.type) {
        case Globals.FETCH_ALL:            
            return {
                ...state, 
                contacts: action.payload
            }
        case Globals.FETCH_ALL_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Globals.FETCH_ALL_REJECTED:
            return {
                ...state,
                loading: false,
                error: { global: action.payload.message}
            }
        case Globals.FETCH_ALL_FULFILLED://this is automatically called when FETCH_ALL is succeded
            return {
                ...state,
                contacts: action.payload.data.data || action.payload.data, //in case pagination is disabled
                loading: false,
                error: null
            }
        case Globals.NEW_CONTACT:
            return {
                ...state,
                contact: {},
                loading: false,
                error: null
            }
        case Globals.SAVE_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Globals.SAVE_FULFILLED:
            return {
                ...state,
                contact: [...state.contacts, action.payload.data.data || action.payload.data],
                loading: false,
                error: null
            }
        case Globals.SAVE_REJECTED:
            return {
                ...state,
                loading: false,
                error: { global: action.payload.message}
            }
        default:
            return state
    }
}