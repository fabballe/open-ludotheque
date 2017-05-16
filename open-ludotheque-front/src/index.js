import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux'

import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/comic'

import { fetchComic } from './actions/comic';
import Root from './components/Root'
import App from './App';
import MyComic from './components/container/MyComic.js';
import { Provider } from 'react-redux';

// React Routeur v4 + React Routeur Redux v5
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middlewareRoute = routerMiddleware(history);

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        middlewareRoute
    )
);




//console.log(browserHistory);
////const history = syncHistoryWithStore(browserHistory, store);
//console.log("ici");
//console.log(history);

//store.dispatch(fetchComic());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/myComic" component={MyComic}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
