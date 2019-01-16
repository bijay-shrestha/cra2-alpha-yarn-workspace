import React from 'react';
import ReactDOM from 'react-dom';
import Link from '../../Link';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link url="https://reactjs.org" title="Learn React" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
