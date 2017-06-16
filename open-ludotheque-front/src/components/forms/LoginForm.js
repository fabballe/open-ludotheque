import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import {userSignIn} from '../../actions/User.js'
import {required, emailRegexp} from './Validation.js';
import {renderField} from './UtilForm.js';

class LoginForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="bs-component">

                <Field name="email" label="Email" type="text" component={renderField} className="form-control" validate={[required, emailRegexp]} />
                <Field name="password" label="Password" type="password" component={renderField} className="form-control" validate={[required]} />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(userSignIn(values.email, values.password));
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
