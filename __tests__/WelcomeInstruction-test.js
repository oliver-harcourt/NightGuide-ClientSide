import React from 'react';
import WelcomeInstruction from '../src/components/WelcomeInstruction';
import { Text } from "react-native";
import renderer from 'react-test-renderer';

// test('renders correctly', () => {
//   const tree = renderer.create(<WelcomeInstruction />).toJSON();
//   expect(tree).toMatchSnapshot();
// });



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