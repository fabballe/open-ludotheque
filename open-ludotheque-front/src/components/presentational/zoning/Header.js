import React, { Component } from 'react';

/* react-boostrap */
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css'


class Header extends Component {

    render() {
        return (
            <header className="Header">
                <LinkContainer to="/login">
                    <Link to="/login">Se connecter</Link>
                </LinkContainer>
            </header>
        );
    }
}

export default Header;
