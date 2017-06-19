import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Collection from './Collection.js';
import './Home.css';

function DisplayLink(props) {
  if(props.isAuthenticated) {
    return (<ul>
      {this.props.collections.map(function (collection) {
        return <li><Collection key={collection.name} /></li>
      })}
    </ul>)
  } else {
    return (
        <div>
          <span>Merci de vous connecter pour accéder à vos collections</span>
        </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-intro">
            <h1>Bienvenue dans OpenLudoteque.</h1>
            <DisplayLink isAuthenticated={this.props.isAuthenticated} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  collections: PropTypes.arrayOf(PropTypes.element).isRequired
};

// Specifies the default values for props:
Home.defaultProps = {
  isAuthenticated : false,
  collections: []
};

export default Home;
