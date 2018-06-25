import { combineReducers } from "redux";
import contactReducer from "./contact-reducer";

const reducers = {
    contactStore: contactReducer
}
const rootReducer = combineReducers(reducers)

export default rootReducer