import React, { Component } from 'react'
import {View,Text} from 'react-native';
import {Container,Content,Form,Item,Input,Label,Icon} from 'native-base';

import HeaderButton from '../../UI/HeaderButton';

class ContactEditable extends Component{
  static navigationOptions = ({navigation}) => {
    return({
      headerTitle:"New Contact",
      headerRight: (
        <View style={{flexDirection:"row"}}>
          <HeaderButton component={<Icon name='md-close' style={{color:"white"}}/>} />
          <HeaderButton component={<Icon name='md-checkmark' style={{color:"white"}}/>} />
        </View>
      )
    })
  }
  render(){
    return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Contact's Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default ContactEditable;