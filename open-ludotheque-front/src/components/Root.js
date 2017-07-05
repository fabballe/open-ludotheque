/**
 * Created by fabballe on 15/05/17.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

/* React-routeur-redux */
import { ConnectedRouter } from 'react-router-redux'

/* UI */
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import Grid from 'material-ui/Grid';

/* presentational pure zoning component */
import MyHeader from './container/MyHeader.js'

import AllRoute from '../route/AllRoute.js'

import {userLoadData} from '../actions/User.js'

const theme = createMuiTheme({
    palette: createPalette({
        type: 'dark' // Switching the dark mode on is a single property value change.
    })
});

class Root extends Component {

    componentDidMount(){
        this.props.store.dispatch(userLoadData());
    }


    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <MuiThemeProvider theme={theme}>
                        <div>
                            <MyHeader />
                            <div>
                                <Grid container gutter={16}>
                                    <Grid item xs={12}>
                                        <AllRoute />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
    }
}
                        //<div>
                        //
                        //    <div className="container">
                        //        <AllRoute />
                        //    </div>
                        //</div>

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;