import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
//import { push } from 'react-router-redux'

import {logUser} from '../../actions/login.js'

class LoginForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="bs-component">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" className="form-control"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(logUser(values.email, values.password));
        }
    }
};

const mapStateToProps = (state) => {
    return {};
};


// Decorate the form component
LoginForm = reduxForm({
    form: 'login' // a unique name for this form
})(LoginForm);

LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginForm;
