import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* react-boostrap */
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css'

function DisplayLink(props) {
    if(props.isAuthenticated) {
        //return <LinkContainer to="/logout"><Link to="/logout">Se déconnecter</Link></LinkContainer>;
        return <ul className="nav navbar-nav navbar-right"><li><a href="#" onClick={props.onClick}>Logout</a></li></ul>;
        //https://github.com/ReactTraining/react-router/issues/1553
    } else {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <LinkContainer to="/register"><Link to="/register">Sign up</Link></LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/login"><Link to="/login">Sign in</Link></LinkContainer>
                </li>
            </ul>
        );
    }
}

class Header extends Component {

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-collapse collapse">
                        <DisplayLink isAuthenticated={this.props.isAuthenticated} onClick={this.props.onClick} />
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

Header.defaultProps = {
    isAuthenticated: false
};

export default Header;
