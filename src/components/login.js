import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert
} from 'react-native';
import { firebaseApp } from './settings';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('login Screen', this.props)
    this.state = {email: '', password: ''};
    console.log('fff', firebaseApp)
  }

  _onPressLogin = () => {
    console.log(this.state)
    if (this.state.email.length === 0) {
      Alert.alert(
        'Error',
        'email 형식에 맞춰주세요',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    } else if (this.state.password.length < 6 ) {
      Alert.alert(
        'Error',
        '비밀번호는 6자 이상!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    } else {
      try {
        console.log(this.state.email, this.state.password)
        firebaseApp.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
        console.log("Login Success");
        this.props.navigator.push({name: 'logout'})
      } catch (error) {
        console.log(error.toString())
      }
    }
  }

  _onPressSignupScreen = () => {
    console.log(this.state)
    this.props.navigator.push({name: 'signup'})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="ID"
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
          />
        <TextInput
          style={{height: 40}}
          placeholder="password"
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry = {true}
          />
        <Button
          onPress={this._onPressLogin}
          title="Login"
          color="#841584"
          />
        <Button
          onPress={this._onPressSignupScreen}
          title="Go Signup"
          color="blue"
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

export default LoginScreen