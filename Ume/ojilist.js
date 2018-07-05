import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import OjiBlock from './oji'

export default class OjiList extends Component {
    render() {
        return (
            <View>
                <OjiBlock name='pat' loc={require('./profile.jpg')} num_call='08091955922'/>
                <OjiBlock name='zoon' loc={require('./zoon.jpg')} num_call='08094098564'/>
                <OjiBlock name='gain' loc={require('./gain.jpg')} num_call='08091955922'/>
            </View>
        )
    }
}