import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import AlbumList from './components/AlbumList';
import styles from './style/style';
import LoginForm from './components/LoginForm'
// import statusBar from './statusBar';


class rideShare extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDumzTOTy4aXPToBHyvV33aRyX-Z-zHtjM",
      authDomain: "test-project-40409.firebaseapp.com",
      databaseURL: "https://test-project-40409.firebaseio.com",
      projectId: "test-project-40409",
      storageBucket: "test-project-40409.appspot.com",
      messagingSenderId: "2199999581"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Login'} />
        {this.renderContent()}
        {/* <AlbumList/> */}
      </View>
    );
  }
}

export default rideShare;
