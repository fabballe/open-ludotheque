import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/myComic'>Ma collection</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
