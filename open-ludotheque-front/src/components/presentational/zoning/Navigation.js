import React, { Component } from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <Nav bsStyle="pills" activeKey={0}>
                <IndexLinkContainer to="/">
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/myComic">
                    <NavItem>Ma collection</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default Navigation;
