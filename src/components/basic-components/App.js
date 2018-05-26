import React, { Component } from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native';

class App extends Component{
  state  = {
    text:"React Native App!!"
  }
  _changeText = (val) => this.setState({text:val});
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button title="Normal Button" onPress={()=>this._changeText("Change Text Via Button")}/>

        <TouchableOpacity
          style={styles.button} 
          onPress={()=>this._changeText('Change Text View Custom Button')}>
          <View>
            <Text>
              Custom Button
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"space-around",
    alignItems:"center"
  },
  button:{
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  }
});

export default App;