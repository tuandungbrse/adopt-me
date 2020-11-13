import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', { id: 'app' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      id: 'pet1',
      name: 'Dog 1',
      animal: 'Dog',
      breed: 'Hello Dog 1',
    }),
    React.createElement(Pet, {
      name: 'Cat 1',
      animal: 'Cat',
      breed: 'Hello Cat 1',
    }),
    React.createElement(Pet, {
      name: 'Bird 1',
      animal: 'Bird',
      breed: 'Hello Bird 1',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
