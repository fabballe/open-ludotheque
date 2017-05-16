/**
 * Created by fabballe on 15/05/17.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { Route, BrowserRouter, Switch} from 'react-router-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import PropTypes from 'prop-types';
import App from '../App';
import MyComic from './container/MyComic.js';
import Navigation from './presentational/Navigation.js'

class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Router history={this.props.history}>
                        <Route path="/" component={App}>
                            <Route path="myComic" component={MyComic}/>
                        </Route>
                    </Router>
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default Root;