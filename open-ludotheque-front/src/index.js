import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import openludothequeApp from './reducers/comic'
import { fetchComic } from './actions/comic';
import App from './App';
import './index.css';

let store = createStore(openludothequeApp);

store.dispatch(fetchComic());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
