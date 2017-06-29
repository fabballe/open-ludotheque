import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Collection from './Collection.js';
import './CollectionList.css';

class CollectionList extends Component {

    componentDidMount() {
        console.log("composant dit mout");
        // we load initial data
        this.props.onLoad();
    }

    render() {
        return (
            <ul>
                <li>coucou </li>
                {this.props.collections.map((collection) => {
                    return <li><Collection key={collection.name}/></li>
                })}
            </ul>
        );
    }
}

CollectionList.propTypes = {
    collections: PropTypes.arrayOf(PropTypes.element).isRequired,
    onLoad: PropTypes.func.isRequired
};

CollectionList.defaultProps = {
    collections: []
};

export default CollectionList;
