import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import ContactNav from './navigations/Contacts';

const RootNav = StackNavigator({
  Contacts : { screen : ContactNav}
},{
  initialRouteName:"Contacts",
  headerMode:"none",
  navigationOptions: {
    headerBackground:"black",
    headerTintColor:"white",
  }
});

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}
