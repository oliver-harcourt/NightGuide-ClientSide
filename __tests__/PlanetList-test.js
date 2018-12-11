import React from 'react';
import PlanetList from '../src/components/PlanetList';
import renderer from 'react-test-renderer';


jest.mock('Text', () => {
  const WelcomeInstruction = jest.requireActual('x');
  const React = require('React');
  class Text extends React.Component {
    render() {
      return React.createElement('x', this.props, this.props.children);
    }
  }
  Text.propTypes = WelcomeInstruction.propTypes;
  return Text;
});


test('renders correctly', () => {
  const tree = renderer.create(<PlanetList />).toJSON();
  expect(tree).toMatchSnapshot();
});
