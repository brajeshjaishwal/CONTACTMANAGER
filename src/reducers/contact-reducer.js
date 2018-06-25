import { Globals } from "../actions/constants";

const initialState = {
    contacts: []
}

export default (state = initialState, action = {}) => {
    console.log(action)
    switch(action.type) {
        case Globals.FETCH_ALL:            
            return {
                ...state, 
                contacts: action.payload 
            }
        case Globals.FETCH_ALL_FULFILLED://this is automatically called when FETCH_ALL is succeded
            return {
                ...state,
                contacts: action.payload.data.data || action.payload.data //in case pagination is disabled
            }
        default:
            return state
    }
}