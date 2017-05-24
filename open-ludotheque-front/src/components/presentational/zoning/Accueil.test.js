import React from 'react';
import ReactDOM from 'react-dom';
import Accueil from './Accueil.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accueil />, div);
});
