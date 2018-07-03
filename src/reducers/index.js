import { combineReducers } from "redux";
import contactReducer from "./contact-reducer";
import { reducer as formReducer }  from 'redux-form'

const reducers = {
    contactStore: contactReducer,
    form: formReducer
}
const rootReducer = combineReducers(reducers)

export default rootReducer