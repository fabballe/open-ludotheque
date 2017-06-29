import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose} from 'redux'

import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/Root.js'


// React Routeur v4 + React Routeur Redux v5
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import Root from './components/Root'
import {userLoadData} from './actions/User.js';

// CSS
import './vendor/css/bootstrap.min.css';
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middlewareRoute = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
        middlewareRoute
    ))
);

// we try to load user data
store.dispatch(userLoadData());

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
