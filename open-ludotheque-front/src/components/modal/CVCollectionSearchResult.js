import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

import {hideModal} from '../../actions/Modal.js'

class CVCollectionSearchResult extends Component {

    render() {
        return (
            <Dialog
                fullScreen
                //maxWidth="xs"
                open={this.props.showModal}
                onRequestClose={this.props.hideModal}
                transition={<Slide direction="up" />}
            >
                <AppBar>
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Close" onClick={this.props.hideModal}>
                            <CloseIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" >
                            Search
                        </Typography>
                        <Button color="contrast">
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem>
                </List>
            </Dialog>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(hideModal());
        }
    }
};

const mapStateToProps = (state) => {
    return {
        showModal : state.modal.showModal
    }
};

CVCollectionSearchResult.propTypes = {
    showModal: PropTypes.bool.isRequired
};

CVCollectionSearchResult.defaultProps = {
    showModal: false
};

CVCollectionSearchResult = connect(
    mapStateToProps,
    mapDispatchToProps
)(CVCollectionSearchResult);

export default CVCollectionSearchResult;
