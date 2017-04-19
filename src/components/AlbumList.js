import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

import {Header, Button} from './common';

import styles from '../style/style';

class AlbumList extends Component {
  state = { albums:[] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
    // debugger;
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View style={{flex:1}}>
        <Header headerText={'Welcome'} />
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
        <View style={{height:45}}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        </View>
      </View>
    );
  }
};

export default AlbumList;
