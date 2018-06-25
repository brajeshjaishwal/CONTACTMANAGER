
const initialState = {
    contacts: []
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'FETCH':            
            return {...state, contacts: action.payload }
        default:
            return state
    }
}