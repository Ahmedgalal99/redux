import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import reduxThunk from "redux-thunk";
import Reducer from "./reducers/index";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(Reducer, enhancer(applyMiddleware(reduxThunk)));

export default store;
