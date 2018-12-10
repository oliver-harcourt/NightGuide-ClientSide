import React from 'react';
import PlanetList from '../src/components/PlanetList';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const constellation = renderer.create(<PlanetList />).toJSON();
  expect(constellation).toMatchSnapshot();
});