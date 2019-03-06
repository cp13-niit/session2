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
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'stretch', height: '100%', width: '100%' }}>
        <View style={styles.box1}><Text>Box1</Text></View>
        <View style={styles.box2}><Text>Box2</Text></View>
        <View style={styles.box3}><Text>Box3</Text></View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  box2: {
    backgroundColor: 'blue',
    width: 50,
    height: 50
  },
  box3: {
    backgroundColor: 'green',
    width: 50,
    height: 50
  }
});
