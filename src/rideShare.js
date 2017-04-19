import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import AlbumList from './components/AlbumList';
import styles from './style/style';
import LoginForm from './components/LoginForm'
// import statusBar from './statusBar';


class rideShare extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDWARbgcxwzMrhIVHWnAP96VUMSWVGKvz4",
      authDomain: "authentication-eba82.firebaseapp.com",
      databaseURL: "https://authentication-eba82.firebaseio.com",
      projectId: "authentication-eba82",
      storageBucket: "authentication-eba82.appspot.com",
      messagingSenderId: "895375189393"
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Login'} />
        <LoginForm />
        {/* <AlbumList/> */}
      </View>
    );
  }
}

export default rideShare;
