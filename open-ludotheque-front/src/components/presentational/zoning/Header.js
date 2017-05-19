import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* react-boostrap */
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css'

function DisplayLoginLink(props) {
    if(props.isAuthenticated) {
        //return <LinkContainer to="/logout"><Link to="/logout">Se déconnecter</Link></LinkContainer>;
        return <a href="#" onClick={props.onClick}>Se déconnecter</a>
        //https://github.com/ReactTraining/react-router/issues/1553
    } else {
        return <LinkContainer to="/login"><Link to="/login">Se connecter</Link></LinkContainer>;
    }
}

class Header extends Component {

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <DisplayLoginLink isAuthenticated={this.props.isAuthenticated} onClick={this.props.onClick} />
                            </li>
                        </ul>
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
