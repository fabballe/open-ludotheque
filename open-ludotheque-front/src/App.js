import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyComic from './components/container/MyComic.js';
//import store from './store/store'
//import {addComic} from './actions/comic'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            Bienvenue dans OpenLudoteque.
        </div>
      </div>
    );
  }
}


//// Log the initial state
//console.log(store.getState());
//
//// Every time the state changes, log it
//// Note that subscribe() returns a function for unregistering the listener
//let unsubscribe = store.subscribe(() =>
//        console.log(store.getState())
//);
//
//store.dispatch(addComic('De cape et de croc'));
//store.dispatch(addComic('Test'));
//
//// Stop listening to state updates
//unsubscribe();

export default App;
