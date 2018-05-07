import React from 'react'
import {TouchableOpacity,Text} from 'react-native';

const HeaderButton = props => {
  return(
    <TouchableOpacity style={{margin:20,elevation:2}} onPress={props.onPress}>
      {
        props.component || <Text style={{color:"green",fontSize:32}}>{props.title}</Text>
      }
    </TouchableOpacity>
  )
}

export default HeaderButton;