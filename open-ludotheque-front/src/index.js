import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/comic'
import { fetchComic } from './actions/comic';
import App from './App';
import './index.css';

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

store.dispatch(fetchComic()).then(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
