import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height:60,
    shadowColor:'#000000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    elevation:2,
    position:'relative',
  },
  headerText: {
    fontSize:20,
  }
};

export { Header };
