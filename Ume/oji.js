import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import call from 'react-native-phone-call'

export default class OjiBlock extends Component {
    constructor(props) {
        super(props)
    }

    onCallOji = () => {
        const args = {
            number: this.props.num_call,
            prompt: false
        }
        call(args).catch(console.error)
    }

    onChooseOji = () => {
        Alert.alert('You Choose ' + this.props.name)
    }

    render() {
        //08091955922
        // const loc = require(this.props.loc)
        return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={this.props.loc}
        />
        <Text style={styles.text}>{this.props.name} {this.props.num_call}</Text>
        <TouchableHighlight style={styles.button} onPress={this.onChooseOji} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Pick!</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button_call} onPress={this.onCallOji} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Call</Text>
        </TouchableHighlight>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        alignItems: 'center',
      },
    text:{
        alignItems: 'center',
      justifyContent: 'center'
    },
    image:{
        width: 50, height: 50, margin:10
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center'
      },
      button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        right: 10,
        padding: 5,
        position: 'absolute',
        justifyContent: 'center'
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
      },
      button_call: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        right: 70,
        padding: 5,
        position: 'absolute',
        justifyContent: 'center'
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
      }
})