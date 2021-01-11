import React, { Component } from  'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import icon from "../../assets/imgs/icon.png"
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default () => {
    let [fontsLoaded] = useFonts({
        'shelter': require('../../assets/fonts/shelter.otf'),
      });

    if(!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})