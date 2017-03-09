/* eslint-disable react/jsx-max-props-per-line */

import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import LoginScreen from './login';
import SignupScreen from './signup';
import TimelineScreen from './timeline';
import { Spinner } from './common/components';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 65 : 55;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const RouterComponent = () => (
  <Router sceneStyle={styles.sceneStyle}>
    <Scene
      key="splash"
      component={Spinner}
      hideNavBar
      nextScene={'main'}
      initial
    />
    <Scene key="auth">
      <Scene key="login" component={LoginScreen} title="로그인" />
      <Scene key="signup" component={SignupScreen} title="회원가입" />
    </Scene>
    <Scene key="main" type={ActionConst.REPLACE}>
      <Scene key="timeline" component={TimelineScreen} title="타임라인" />
    </Scene>
  </Router>
);

const styles = StyleSheet.create({
  sceneStyle: {
    paddingTop: APPBAR_HEIGHT,
    backgroundColor: '#fff',
  },
});

export default RouterComponent;
