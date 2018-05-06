import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {Container,List,ListItem} from 'native-base';

class ContactList extends Component {

  static navigationOptions = {
    headerTitle: "Contacts"
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

  render(){

    const list = this.state.contacts.map((contact)=>(
      <ListItem key={contact.mobile}>
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
