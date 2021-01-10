import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';


export default class App extends Component {
  
  render () {

      const comments = [{
        nickname: 'Joana',
        comment: 'Excelente Foto!'
      }, {
        nickname: 'Rafa',
        comment: 'Mto ruim'
      }]


    return (
      <View style={{flex:1}} >
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} 
          comments={comments} />
      </View>
    );
  }
}
