import React, { Component } from 'react';

/* react-boostrap */
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css'


class Header extends Component {

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <LinkContainer to="/login">
                                    <Link to="/login">Se connecter</Link>
                                </LinkContainer>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
