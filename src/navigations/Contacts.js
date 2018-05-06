import React, { Component } from 'react'
import {View,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import ContactList from '../components/Contacts/ContactList';

const ContactNav = StackNavigator({
  ContactList : { screen : ContactList }
},{
  initialRouteName : "ContactList"
});

export default ContactNav;
