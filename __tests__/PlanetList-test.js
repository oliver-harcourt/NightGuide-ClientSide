import React from 'react';
import PlanetList from '../src/components/PlanetList';
import renderer from 'react-test-renderer';

// var mockery = require('mockery');
// mockery.enable();
// mockery.registerMock('../assets/planeticon/mercury.png','mercury');
test('renders correctly', () => {
  const tree = renderer.create(<PlanetList />).toJSON();
  expect(tree).toMatchSnapshot();
});
