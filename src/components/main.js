import Config from 'react-native-config';
import firebase from 'firebase';
import React from 'react';
import { Navigator } from 'react-native';
import LoginScreen from './login';
import LogoutScreen from './logout';
import SignupScreen from './signup';


class MainComponent extends React.Component {
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
        this.setState({ mode: 'logout' });
      } else {
        this.setState({ mode: 'login' });
      }
      console.log(this.state.mode)
    });
    window.firebase = firebase;
  }

  _renderScene(route, navigator) {
    switch (route.name) {
      case 'login':
      return <LoginScreen route={route} navigator={navigator} title={ 'Login Page' } />;
      case 'logout':
      return <LogoutScreen route={route} navigator={navigator} title={ 'Logout Page' } />;
      case 'signup':
      return <SignupScreen route={route} navigator={navigator} title={'Signup Page'} />;
      default:
      // console.log('default');
      break;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'login' }}
        renderScene={this._renderScene}
        />
    );
  }
}


export default MainComponent;
