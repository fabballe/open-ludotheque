import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import {required, emailRegexp} from './Validation.js';
import {renderField} from './UtilForm.js';

import {userSignUp} from '../../actions/User.js';

const validateFunction = (values) => {
    const errors = {};
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password confirmation doesn\'t match';
    }
    return errors;
};

class RegisterForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="bs-component">
                <Field name="email" label="Email" type="text" component={renderField} className="form-control"
                       validate={[required, emailRegexp]}/>
                <Field name="firstName" label="First name" type="text" component={renderField} className="form-control"
                       validate={[required]}/>
                <Field name="lastName" label="Last name" type="text" component={renderField} className="form-control"
                       validate={[required]}/>
                <Field name="password" label="Password" type="password" component={renderField} className="form-control"
                       validate={[required]}/>
                <Field name="confirmPassword" label="Confirm password" type="password" component={renderField}
                       className="form-control" validate={[required]}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(userSignUp(values));
        }
    }
};

const mapStateToProps = (state) => {
    return {};
};


// Decorate the form component
RegisterForm = reduxForm({
    form: 'register', // a unique name for this form
    validate: validateFunction
})(RegisterForm);

RegisterForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

export default RegisterForm;
