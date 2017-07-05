import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

/* react-boostrap */
import {Link} from 'react-router-dom';

import Navigation from './Navigation.js'

import './Header.css'

function DisplayLink(props) {
    if(props.isAuthenticated) {
        return (
                <Toolbar>
                    <Navigation openMenu={props.openMenu} displayMenu={props.displayMenu} closeMenu={props.closeMenu} />

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
                <DisplayLink
                    isAuthenticated={this.props.isAuthenticated}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    openMenu={this.props.openMenu}
                    onClick={this.props.onClick}
                    displayMenu={this.props.displayMenu}
                    closeMenu={this.props.closeMenu}
                />
            </AppBar>
        );
    }
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    openMenu : PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    displayMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
};

Header.defaultProps = {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    openMenu: false
};

export default Header;
