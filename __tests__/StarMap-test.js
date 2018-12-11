import React from 'react';
import StarMap from '../src/components/StarMap';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<StarMap />).toJSON();
  expect(tree).toMatchSnapshot();
});