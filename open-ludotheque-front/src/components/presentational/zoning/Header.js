import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

/* react-boostrap */
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css'

function DisplayLink(props) {
    if(props.isAuthenticated) {
        return (
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography type="title" color="inherit">
                        Open Ludothèque
                    </Typography>

                    <Button onClick={props.onClick} color="contrast">Logout {props.firstName} {props.lastName}</Button>
                </Toolbar>
            );
    } else {
        return (
            <Toolbar>
                <Link to="/login"><Button color="contrast">Sign in</Button></Link>
                <Link to="/register"><Button color="contrast">Sign up</Button></Link>
            </Toolbar>
        );
    }
}

class Header extends Component {

    render() {
        return (
            <AppBar position="static" className="Header">
                <DisplayLink isAuthenticated={this.props.isAuthenticated} firstName={this.props.firstName} lastName={this.props.lastName} onClick={this.props.onClick} />
            </AppBar>
        );
    }
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

Header.defaultProps = {
    isAuthenticated: false,
    firstName: "",
    lastName: ""
};

export default Header;
