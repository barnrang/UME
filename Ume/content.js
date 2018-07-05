import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import First from './first'

export default class Content extends Component{

    renderPage = () => {
        if(this.props.content === 'games'){
            return (
                    <First/>
            )
        }
        else if(this.props.content === 'movies-tv'){
            return (
                <View>
                    <Text>the second test</Text>
                </View>
            )
        }
        else if(this.props.content === 'music'){
            return (
                <View>
                    <Text>the third test</Text>
                </View>
            )
        }
    }

    render(){
        if(this.props.content === 'games'){
            return (
                // <First/>
                <First/>
            )
        }
        else if(this.props.content === 'movies-tv'){
            return (
                <View style={{flex:1}}>
                    <Text>the second test</Text>
                </View>
            )
        }
        else if(this.props.content === 'music'){
            return (
                <View style={{flex:1}}>
                    <Text>the third test</Text>
                </View>
            )
        }
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