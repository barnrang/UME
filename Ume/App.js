import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Content from './content'
import RegisterForm from './register_form'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state =  {
      activeTab:this.tabs[0]
    };
  }

  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
 
  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )
 
  renderTab = ({ tab, isActive }) => {
    //this.setState({content: tab.key})
    return (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}/>
  )
}

  render() {
    return (
    <View style={{ flex: 1}}>
      <View style={styles.container}>
        <Content content={this.state.activeTab.key}/>
      </View>
      <BottomNavigation
        onTabPress={activeTab => {console.log(this.state); this.setState({ activeTab });}}
        renderTab={this.renderTab}
        tabs={this.tabs}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

// const Route = createStackNavigator({
//   RegisterForm: RegisterForm,
//   Home: App,
// },
// {
//   initialRouteName:'Home',
// }
// );
