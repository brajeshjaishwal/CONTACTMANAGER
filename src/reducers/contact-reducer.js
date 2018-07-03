import { Globals } from "../actions/constants";

const initialState = {
    contacts: [],
    contact: null,
    loading: false,
    redirect: false,
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
                contact: null,
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
                contact: {_id: null, name: {first: "", last: ""}, phone: "", email: ""},
                loading: false,
                error: null
            }
        case Globals.GET_LOCAL:
            const id = action.payload
            return {
                ...state,
                contact: state.contacts.find(c => c._id === id),
                loading: false,
                error: null
            }
        case Globals.SAVE_PENDING:
            return {
                ...state,
                contact: null,
                loading: true,
                error: null
            }
        case Globals.SAVE_FULFILLED:
            return {
                ...state,
                contacts: [...state.contacts, action.payload.data.data || action.payload.data],
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
                contact: null,
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
                redirect: false,
                contact: null,
                error: null,
                loading: true
            }
        case Globals.UPDATE_FULFILLED:
            const updatedContact = action.payload.data.data || action.payload.data
            return {
                ...state,
                redirect: true,
                contacts: state.contacts.map(item => item._id === updatedContact._id ? updatedContact : item),
                contact: updatedContact,
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
                contact: null,
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