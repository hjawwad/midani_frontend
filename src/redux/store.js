import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({});
// to show redux store in chrome developer tools is to update compose function
const composeEnhancer = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
