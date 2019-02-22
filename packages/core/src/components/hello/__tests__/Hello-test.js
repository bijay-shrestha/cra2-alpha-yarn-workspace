import React from 'react';
import renderer from 'react-test-renderer';
import { Hello } from '@company/core';

describe('Hello', () => {
  const props = {
    name: 'Create React App'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Hello {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
