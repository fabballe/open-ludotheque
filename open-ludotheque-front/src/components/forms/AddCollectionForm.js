import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
//import { push } from 'react-router-redux'

import {renderTextField} from './UtilForm.js';
import {required, emailRegexp} from './Validation.js';

import Button from 'material-ui/Button';

import CVCollectionSearchResult from '../modal/CVCollectionSearchResult.js'
import {showModal} from '../../actions/Modal.js'

import './form.css'

class AddCollectionForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} className="CenterForm">
                    <div>
                        <Field name="name" component={renderTextField} label="Name"  validate={[required]} />
                    </div>
                    <div>
                        <Field name="lastName" component={renderTextField} label="Last Name" validate={[required]} />
                    </div>
                    <div>
                        <Field name="email" component={renderTextField} label="Email" validate={[required]} />
                    </div>
                    <div className="centerWrapper">
                        <Button raised color="primary" onClick={this.props.displayModal}>
                            Search on Comic Vine
                       </Button>

                        <Button raised color="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>

                <CVCollectionSearchResult showModal={true} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            console.log("test");
        },
        displayModal: () => {
            dispatch(showModal());
        }
    }
};

const mapStateToProps = (state) => {
    return {};
};

AddCollectionForm.propTypes = {
    showModal: PropTypes.bool.isRequired
};

AddCollectionForm.defaultProps = {
    showModal: false
};

// Decorate the form component
AddCollectionForm = reduxForm({
    form: 'addCollection' // a unique name for this form
})(AddCollectionForm);

AddCollectionForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCollectionForm);

export default AddCollectionForm;
