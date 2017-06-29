import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    //<div>{isAuthenticated}</div>
    <Route {...rest} render={props =>
        isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{ pathname: "/login" }} />}
    />
);

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
};

//export default connect(mapStateToProps, null, null, {
//    pure: false
//})(PrivateRoute);

export default connect(mapStateToProps)(PrivateRoute);