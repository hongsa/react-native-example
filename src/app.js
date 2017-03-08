import React from 'react';
import Config from 'react-native-config';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Router from './router';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.FIREBASE_APIKEY,
      authDomain: Config.FIREBASE_AUTHDOMAIN,
      databaseURL: Config.FIREBASE_DB,
      storageBucket: Config.FIREBASE_STORAGE,
      messagingSenderId: Config.FIREBASE_SENDER,
    });
    window.firebase = firebase;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Actions.main();
      } else {
        Actions.auth();
      }
    });
  }

  render() {
    return (
      <Router />
    );
  }
}
export default App;
