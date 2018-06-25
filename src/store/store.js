import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

const middleware = composeWithDevTools(
    applyMiddleware( promise(), thunk )
)

export default createStore(rootReducer, middleware)