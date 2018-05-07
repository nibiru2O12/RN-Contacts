import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {Container,List,ListItem,Icon} from 'native-base';

import HeaderButton from '../../UI/HeaderButton';

class ContactList extends Component {

  static navigationOptions = ({navigation}) => {
    return ({
      headerTitle: "Contacts",
      headerRight:(
        <HeaderButton 
          title={<Icon name="md-add" style={{color:"green"}}  />} 
          onPress={()=>navigation.navigate("ContactNew",{addContact:navigation.state.params.addContact})}
        />)  
    })
  }

  state = {
    contacts : [
      {
        name:"rj",
        email:"rj@yahoo.com",
        mobile:"09999999999"
      },{
        name:"robert",
        email:"robert@yahoo.com",
        mobile:"09992229999"
      },{
        name:"jhon",
        email:"jhon@yahoo.com",
        mobile:"09999449999"
      },{
        name:"gagui",
        email:"gagui@yahoo.com",
        mobile:"0999669999"
      },
    ]
  }

  componentDidMount(){
    this.props.navigation.setParams({
      addContact : this._addContact
    })
  }

  _addContact = contact => {
    const contacts = [...this.state.contacts];
    contacts.push(contact);
    this.setState({contacts})
  }

  render(){

    const {navigation} = this.props;

    const list = this.state.contacts.map((contact)=>(
      <ListItem 
        key={contact.mobile} 
        onPress={()=>navigation.navigate('Contact',{contact})}>
        <Text>{contact.name}</Text>
      </ListItem>
    ))

    return(
      <Container>
        <List>
          {list}
        </List>
      </Container>
    );
  }
}

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
