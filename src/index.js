import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import ContactNav from './navigations/Contacts';

const RootNav = StackNavigator({
  ContactStack : { screen : ContactNav}
},{
  initialRouteName:"ContactStack",
  headerMode:"none",
});

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}
