import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import { createStackNavigator } from 'react-navigation';
import Calendar from 'react-native-calendar';
import OjiList from './ojilist'

const Form = t.form.Form;

const distance = t.enums({
    1:'Within 20km',
    2:'20-40',
    3:'>40'
})

const User = t.struct({
    Name: t.String,
    Age: t.Number,
    Distance: distance
  });

const customStyle = {
    dayCircleFiller: {
      backgroundColor: 'green',
    },
  }

export default class RegisterForm extends Component {
    constructor (props) {
        super(props)
        this.state = {page:1}
    }

    onPressFirstPage = () => {
        console.log(this.refs.form.getValue())

        //Catch Unfill
        if(this.refs.form.getValue()) 
        this.setState({page: 2});
    }

    onChooseDate = (date) => {
        const date_for = new Date(date);
        const date_send = (date_for.getMonth() + 1) + '/' + date_for.getDate()
        this.setState({page:3, date:date_send})
    }

    renderPage = () => {
        if (this.state.page == 1) {
            return (
                <View style={styles.container}>
                <Form
                ref="form"
                type={User}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPressFirstPage} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight> 
                </View>
            )
        }
        else if (this.state.page == 2) {
            return (<View><Calendar
                    onDateSelect={this.onChooseDate}
                    customStyle={customStyle}/>
            </View>)
        }
        else if (this.state.page == 3) {
            return (<View style={styles.container}><Text>{this.state.date}</Text>
                <OjiList/>
            </View>)
        }
    }

    render() {
        return (
            <View>
                {this.renderPage()}
            </View>
        )
    }
}


class ContinueForm extends Component {
    render() {
        return (
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });
var calendar = StyleSheet.create({
    calen:{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}})
// export default FirstForm;