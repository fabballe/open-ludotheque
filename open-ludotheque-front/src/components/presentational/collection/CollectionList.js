import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Collection from './Collection.js';
import AddButton from '../button/AddButton.js';

import './CollectionList.css';

class CollectionList extends Component {

    componentDidMount() {
        // we load initial data
        this.props.onLoad();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.collections.map((collection) => {
                        return <li><Collection key={collection.name}/></li>
                    })}
                </ul>

                <AddButton linkToForm="/addCollection" />

            </div>
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
