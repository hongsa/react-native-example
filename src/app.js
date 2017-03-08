import Config from 'react-native-config';
import firebase from 'firebase';
import React from 'react';
import { View } from 'react-native';
// import { Router, Scene } from 'react-native-router-flux';
import { Spinner } from './common/components';

import LoginScreen from './login';
import SignupScreen from './signup';
import TimelineScreen from './timeline';
import Router from './router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: null, // 'logIn', // signUp // loggedIn
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.FIREBASE_APIKEY,
      authDomain: Config.FIREBASE_AUTHDOMAIN,
      databaseURL: Config.FIREBASE_DB,
      storageBucket: Config.FIREBASE_STORAGE,
      messagingSenderId: Config.FIREBASE_SENDER,
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ mode: 'loggedIn' });
      } else {
        this.setState({ mode: 'login' });
      }
      console.log(this.state.mode);
    });
    window.firebase = firebase;
  }

  _renderContent = () => {
    console.log(this.state.mode);
    switch (this.state.mode) {
      case 'login':
      return <LoginScreen title="login" onPressSignupScreen={() => this.setState({ mode: 'signup' })} />;
      case 'signup':
      return <SignupScreen title="signup" onPressLoginScreen={() => this.setState({ mode: 'login' })} />;
      case 'loggedIn':
      return (
        <Router>
          <Scene key="root">
            <Scene
              key="timelineScreen"
              component={TimelineScreen}
              title="TimelineScreen"
            />
          </Scene>
        </Router>
      );
      default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return (
      // <View style={{ flex: 1 }}>
      //   {this._renderContent()}
      // </View>
      <Router />
    );
  }
}
export default App;
