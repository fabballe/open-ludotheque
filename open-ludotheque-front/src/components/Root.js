/**
 * Created by fabballe on 15/05/17.
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';

/* React-routeur-redux */
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

/* presentational pure zoning component */
import Header from './presentational/zoning/Header.js'
import Accueil from './presentational/zoning/Accueil.js'

/* Forms component */
import LoginForm from './forms/LoginForm.js'
//import Navigation from './presentational/zoning/Navigation.js'

import PropTypes from 'prop-types';
import MyComic from './container/MyComic.js';


class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <div>
                        <Header />

                        <div className="container">
                            <Route exact path="/" component={Accueil} />
                            <Route path="/login" component={LoginForm} />
                            <Route path="/myComic" component={MyComic}/>
                        </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;