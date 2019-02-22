import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from '@company/shared';

describe('Link', () => {
  const props = {
    title: 'Learn React',
    url: 'https://reactjs.org'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Link {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
