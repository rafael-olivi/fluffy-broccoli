import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert  } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 


class AddComponent extends Component {

    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert('Adicionado!', this.state.comment)
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="Pode comentar..." 
                        style={styles.input} autoFocus={true}
                        value={this.props.comment} onChangeText={comment => this.setState({comment})} 
                        onSubmitEditing={this.handleAddComment} />
                    <TouchableWithoutFeedback onPress={() => {this.setState({editMode: false})}} >
                        <FontAwesome name='times' size={25} color='#555' />
                    </TouchableWithoutFeedback>
                </View>
            )
        } else {
            commentArea = (
                <TouchableWithoutFeedback onPress={() => {this.setState({editMode: true})}}>
                    <View style={styles.container}>
                        <FontAwesome name="comment-o" size={25} color='#555' />
                        <Text style={styles.caption}>Adicione um comentario...</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }

        return(
            <View style={{flex: 1}}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    }, 
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC',
    },
    input: {
        width: '90%'
    }

})

export default AddComponent