import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore  , compose, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import bodyReducer from "./store/reducers/body"
import authReducer from "./store/reducers/auth"

import App from "./App.js";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    body: bodyReducer,
    auth: authReducer

})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

axios.interceptors.request.use(request => {
    // console.log(request)
    return request
});

ReactDOM.render (
    <Provider store={store}>
    <BrowserRouter>
        <App title="App Manager"/> 
    </BrowserRouter>
    </Provider>

, document.getElementById("root"));

