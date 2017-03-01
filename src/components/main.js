import React from 'react';
import { Navigator } from 'react-native';
import LoginScreen from './login'
import LogoutScreen from './logout'
import SignupScreen from './signup'


class MainComponent extends React.Component {
  _renderScene(route, navigator) {
    console.log(route)
    console.log(navigator)
    switch (route.name) {
      case 'login':
      return <LoginScreen route={route} navigator={navigator} title={'Login Page'}/>
      break;
      case 'logout':
      return <LogoutScreen route={route} navigator={navigator} title={'Logout Page'}/>
      break;
      case 'signup':
      return <SignupScreen route={route} navigator={navigator} title={'Signup Page'}/>
      break;
      default:
      console.log('default')
      break;
    }
  }

  render() {
    const routes = {
      login: LoginScreen,
      logout: LogoutScreen,
      signup: SignupScreen
    };
    return (
      <Navigator
        initialRoute={{ name: 'login' }}
        renderScene={this._renderScene}
        />
    );
  }
}


export default MainComponent
