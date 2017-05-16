import React, { Component } from 'react';
//import logo from './../../../logo.svg';
import './Accueil.css';


class Accueil extends Component {
  render() {
    return (
      <div>
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

export default Accueil;
