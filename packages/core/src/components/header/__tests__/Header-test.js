import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '@company/core';

describe('Header', () => {
  const props = {
    title: 'Header'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
