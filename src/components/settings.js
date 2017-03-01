import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCKRlYWPnAQ7e5bEGKOdgTctVpSdMGrT4Y",
  authDomain: "react-native-sasung.firebaseapp.com",
  databaseURL: "https://react-native-sasung.firebaseio.com",
  storageBucket: "react-native-sasung.appspot.com"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
