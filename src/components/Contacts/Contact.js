import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Icon } from 'native-base';

class Contact extends Component{

  static navigationOptions = {
    headerTitle : "Contact Details"
  }
  
  render(){

    const {contact} = this.props.navigation.state.params;

    return(
      <View>
        <Text>{`Contact : ${contact.name}`}</Text>
        <Text>{`Mobile : ${contact.mobile}`}</Text>
        <Text>{`Email : ${contact.email}`}</Text>
      </View>
    )
    
  }
}

export default Contact;