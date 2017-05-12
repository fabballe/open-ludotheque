import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comic.css';

class Comic extends Component {
  render() {
    return (
      <div className="Comic">
        <span>Comic name</span>{this.props.name}
      </div>
    );
  }
}

Comic.propTypes = {
    name: PropTypes.string.isRequired
};

export default Comic;
