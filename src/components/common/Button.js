import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {
  const {button, textStyle} = styles;

  return (
    <TouchableOpacity
      style={button}
      onPress={whenPressed}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5,
  },
  textStyle: {
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    paddingTop:10,
    paddingBottom:10
  }
};

export { Button };
