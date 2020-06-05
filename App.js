import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './pages/Home'

export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
        <Home/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff781f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});