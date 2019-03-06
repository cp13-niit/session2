import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    }

    const countdown = setInterval(() => {
      let count = this.state.count;
      count--;
      if (count == 0) {
        clearInterval(countdown);
      }
      this.setState({
        count: count
      })
    }, 1000)
  }

  render() {
    var sayHi = "helloword";
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
