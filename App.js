import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';


export default class App extends Component {
  
  render () {
    return (
      <View >
        <Header />
        {/* <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" /> */}
      </View>
    );
  }
}
