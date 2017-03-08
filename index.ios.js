import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app';

class RnFirst extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('RnFirst', () => RnFirst);
