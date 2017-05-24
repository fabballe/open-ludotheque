import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header  from './Header.js';

describe('<Header />', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Header onClick={() => {}} isAuthenticated={true} />, div);
    });

    it('renders with good authentication link', () => {
        const wrapper = mount(<Header onClick={() => {}} isAuthenticated={true} />);
        const authenticatedLink = <a href="#">Se déconnecter</a>;
        //console.log(wrapper);
        //console.log(authenticatedLink);
        console.log(wrapper.html());
        expect(wrapper.props().isAuthenticated).toEqual(true);
        expect(wrapper.contains(authenticatedLink)).toEqual(true);
    });
});