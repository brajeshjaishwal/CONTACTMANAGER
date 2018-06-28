import { Globals } from "../actions/constants";
import { updateContact } from "../actions/contact-actions";

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
        {
            const errorData = action.payload.response.data
            return {
                ...state,
                loading: false,
                error: { global: errorData.message, fields: errorData.errors }
            }
        }
        case Globals.FETCH_PENDING:
            return {
                ...state,
                contact: { name: {}},
                error: null,
                loading: true
            }
        case Globals.FETCH_FULFILLED:
            const fetchContact = action.payload.data.data || action.payload.data
            return {
                ...state,
                contact: fetchContact,
                loading: false
            }
        case Globals.FETCH_REJECTED:
            return {
                ...state,
                loading: false,
                error: { global: action.payload.message }
            }
        case Globals.UPDATE_PENDING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case Globals.UPDATE_FULFILLED:
            const updatedContact = action.payload.data.data || action.payload.data
            return {
                ...state,
                contact: state.contacts.map(item => item._id === updatedContact._id ? updateContact : item),
                loading: false
            }
        case Globals.UPDATE_REJECTED:
        {
            const errorData = action.payload.response.data
            return {
                ...state,
                loading: false,
                error: { global: errorData.message, fields: errorData.errors }
            }
        }
        case Globals.DELETE_PENDING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case Globals.DELETE_FULFILLED:
            const deletedContact = action.payload.data.data || action.payload.data
            return {
                ...state,
                contacts: state.contacts.filter(item => item._id !== deletedContact._id),
                loading: false
            }
        case Globals.DELETE_REJECTED:
            return {
                ...state,
                loading: false,
                error: { global: action.payload.message }
            }
        default:
            return state
    }
}