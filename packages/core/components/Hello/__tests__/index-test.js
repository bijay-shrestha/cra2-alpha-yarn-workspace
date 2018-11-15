import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello name="Hello" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
