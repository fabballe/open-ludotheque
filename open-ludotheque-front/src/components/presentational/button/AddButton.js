import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import {Link} from 'react-router-dom';

import './AddButton.css';

class AddButton extends Component {

    render() {
        return (
            <div className="AddButton">
                <Link to={this.props.linkToForm}>
                    <Button fab color="primary">
                        <AddIcon />
                    </Button>
                </Link>
            </div>
        );
    }
}


AddButton.propTypes = {
    linkToForm: PropTypes.string.isRequired
};

export default AddButton;
