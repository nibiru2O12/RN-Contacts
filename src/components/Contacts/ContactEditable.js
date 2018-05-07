import React, { Component } from 'react'
import {View,Text,Alert} from 'react-native';
import {Container,Content,Form,Item,Input,Label,Icon} from 'native-base';

import HeaderButton from '../../UI/HeaderButton';

class ContactEditable extends Component{
  static navigationOptions = ({navigation}) => {
    return({
      headerTitle:"New Contact",
      headerRight: (
        <View style={{flexDirection:"row"}}>
          <HeaderButton 
            component={<Icon name='md-close' style={{color:"red"}}/>}
            onPress={()=>{
              Alert.alert(
                'Cancel',
                'Discard New Contact?',
                [
                  {text:"Cancel", onPress : ()=> console.log('continue adding contact')},
                  {text:"Discard", onPress: ()=> navigation.goBack()}
                ]
              )
            }} />
          <HeaderButton 
            component={<Icon name='md-checkmark' style={{color:"green"}}/>}
            onPress={()=>{
              Alert.alert(
                'Save',
                'Save Contact?',
                [
                  {text:"cancel",onPress:()=>null},
                  {text:"Save",onPress:navigation.state.params.saveContact}
                ]
              );
            }} />
        </View>
      )
    })
  }

  state = {
    name:"",
    email:"",
    mobile:""
  }

  componentDidMount(){
    this.props.navigation.setParams({
      saveContact : this._addContact
    })
  }

  _addContact = contact => {
    const{navigation} = this.props;
    const {name,email,mobile} = this.state;
    navigation.state.params.addContact({name,email,mobile}); 
    navigation.goBack();
  }

  _onChange = (name,value) => {
    this.setState({[name]:value});
  }

  render(){
    return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Contact's Name</Label>
              <Input onChangeText={(val)=>this._onChange('name',val)} />
            </Item>
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input onChangeText={val=>this._onChange('email',val)} />
            </Item>
            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input onChangeText={val=>this._onChange('mobile',val)} />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default ContactEditable;