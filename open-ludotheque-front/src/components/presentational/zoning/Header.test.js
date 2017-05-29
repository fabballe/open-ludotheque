import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';

import Header  from './Header.js';


describe('<Header />', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Header onClick={() => {}} isAuthenticated={true} />, div);
    });

    it('renders with disconnect link', () => {
        const wrapper = mount(<Header onClick={() => {}} isAuthenticated={true} />);
        const disconnectLink = <a href="#">Se déconnecter</a>;
        expect(wrapper.props().isAuthenticated).toEqual(true);
        expect(wrapper.containsMatchingElement(disconnectLink)).toEqual(true);
    });

    it('renders with connect link', () => {
        const wrapper = mount(<MemoryRouter><Header onClick={() => {}} isAuthenticated={false} /></MemoryRouter>);
        const authenticatedLink = <Link to="/login">Se connecter</Link>;
        const headerComponent = wrapper.find(Header);
        expect(headerComponent.props().isAuthenticated).toEqual(false);
        expect(headerComponent.containsMatchingElement(authenticatedLink)).toEqual(true);
    });
});