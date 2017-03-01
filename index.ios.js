import React from 'react';
import { AppRegistry } from 'react-native';
import MainComponent from './src/components/main';

class RnFirst extends React.Component {
  render() {
    return (
      <MainComponent/>
    );
  }
}

AppRegistry.registerComponent('RnFirst', () => RnFirst);
