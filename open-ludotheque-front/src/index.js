import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/comic'
import { fetchComic } from './actions/comic';
import Root from './routes/Root'
import './index.css';

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

store.dispatch(fetchComic());

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
