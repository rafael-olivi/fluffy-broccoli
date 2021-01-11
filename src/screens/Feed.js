import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'
class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: "Rafael",
            email: 'rafaeelele@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Jhon',
                comment: 'cool'
            }]
        },
        {
            id: Math.random(),
            nickname: "Alicia",
            email: 'AliciaT@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }],

    }

    render() {
        return(
            <View style={styles.container}>
                <Header ></Header>
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`} 
                    renderItem={({item}) => 
                        <Post key={item.id} {...item} />}  />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed