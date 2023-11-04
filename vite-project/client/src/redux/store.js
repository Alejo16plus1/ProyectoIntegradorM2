import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk'

const composeEnhancers = 

    ( typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)






export default store;

// import {createStore, applyMiddleware, compose} from "redux";
// import rootReducer from "./reducer";
// import thunkMiddLeware from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

// const store = createStore (
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddLeware))
// );
// export default store;