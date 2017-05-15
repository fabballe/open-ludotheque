import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comic from './Comic';
import './Collection.css';

class Collection extends Component {

    render() {
        return (
            <ul className="Collection">
                {this.props.products.map(function (product) {
                    return <li key={product.name}><Comic name={product.name}/></li>
                })}
            </ul>
        );
    }
}

Collection.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default Collection;
