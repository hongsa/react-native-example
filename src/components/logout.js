import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
// import { firebase } from './settings';

class LogoutScreen extends React.Component {
  _onPressLogOut = () => {
    this._logout();
  }

  async _logout() {
    try {
        await firebase.auth().signOut();
        this.props.navigator.pop();
    } catch (error) {
        console.log(error.toString());
    }
}

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Button
          onPress={this._onPressLogOut}
          title="Logout"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LogoutScreen;
