import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './register_form';

export default class First extends Component{
    render(){
        return (
            <RegisterForm/>
        )
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