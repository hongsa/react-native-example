import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
} from 'react-native';

class TimelineScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      loading: false,
    };
  }

  componentDidMount() {
    this._getDataFromApi();
  }

  async _getDataFromApi() {
    try {
      const response = await fetch('https://jsdev.kr/latest.json');
      const responseJson = await response.json();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.topic_list.topics),
      });
      this.setState({
        loading: true,
      });
    } catch (error) {
      console.error(error);
    }
  }

  _renderRow(rowData) {
    return (
      <View>
        <Text>Title : {rowData.title}</Text>
        <Text>Views : {rowData.views}</Text>
      </View>
    );
  }

  _onPressLogOut = () => {
    this._logout();
  }

  async _logout() {
    try {
      await firebase.auth().signOut();
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections
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

export default TimelineScreen;
