import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
} from 'react-native';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', passwordConfirm: '', error: '' };
  }

  _onPressSignup = () => {
    if (this.state.email.length === 0 || this.state.email.includes('@') === false) {
      Alert.alert(
        'Error',
        'email 형식에 맞춰주세요',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    } else if (this.state.password.length < 6) {
      Alert.alert(
        'Error',
        '비밀번호는 6자 이상!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    } else if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert(
        'Error',
        '비밀번호 동일하게 입력해주세요',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    } else {
      this._signup(this.state.email, this.state.password);
    }
  }

  async _signup(email, pass) {
    try {
      await firebase.auth()
      .createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      this.setState({
        error: error.message || error,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="email"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
          />
        <TextInput
          style={{ height: 40 }}
          placeholder="password"
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry={true}
          />
        <TextInput
          style={{ height: 40 }}
          placeholder="password Confirm"
          value={this.state.passwordConfirm}
          onChangeText={(text) => this.setState({ passwordConfirm: text })}
          secureTextEntry={true}
          />
        <Text>
          {this.state.error}
        </Text>
        <Button
          onPress={this._onPressSignup}
          title="Signup"
          color="#841584"
          />
        <Button
          onPress={this.props._onPressLoginScreen}
          title="Go Login"
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

export default SignupScreen;
