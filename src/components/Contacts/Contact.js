import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Icon } from 'native-base';

import HeaderButton from '../../UI/HeaderButton';

class Contact extends Component{

  static navigationOptions = ({navigation}) => {
    return ({
      headerTitle : "Contact Details",
      headerRight : (
        <HeaderButton 
        component={<Icon name='md-pencil1' style={{color:"white"}}/>}
        onPress={()=> navigation.navigate('ContactEdit') } />
      ),
    })
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