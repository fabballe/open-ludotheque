/**
 * Created by fabballe on 15/05/17.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

/* React-routeur-redux */
import { ConnectedRouter } from 'react-router-redux'

/* presentational pure zoning component */
import MyHeader from './container/MyHeader.js'
import AllRoute from '../route/AllRoute.js'

import {userLoadData} from '../actions/User.js'

class Root extends Component {

    componentDidMount(){
        this.props.store.dispatch(userLoadData());
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <div>
                        <MyHeader />

                        <div className="container">
                            <AllRoute />
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