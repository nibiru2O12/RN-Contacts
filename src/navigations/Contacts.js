import React, { Component } from 'react'
import {View,TouchableOpacity,Text} from 'react-native';
import {Button} from 'native-base';
import {StackNavigator} from 'react-navigation';

import ContactList from '../components/Contacts/ContactList';
import Contact from '../components/Contacts/Contact';
import ContactEditable from '../components/Contacts/ContactEditable';

const ContactNav = StackNavigator({
  ContactList : { screen : ContactList },
  Contact: {screen:Contact},
  ContactNew:{screen:ContactEditable}
},{
  initialRouteName : "ContactList",
  navigationOptions: ({navigation})=>({
    headerStyle:{
      backgroundColor:"black"
    },
    headerTintColor:"white"
  })
});

export default ContactNav;