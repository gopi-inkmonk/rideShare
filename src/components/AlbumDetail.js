import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import {Card} from './common';
import {CardSection} from './common';
import {Button} from './common';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    albumImage
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumImage}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy {title} Now
        </Button>
      </CardSection>
    </Card>
  );
}

const styles = {
  headerContentStyle: {
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerTextStyle: {
    fontSize:18
  },
  thumbnailStyle: {
    width:50,
    height:50,
  },
  thumbnailContainerStyle: {
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },
  albumImage: {
    height:300,
    flex:1,
    width:null,
  }
}

export default AlbumDetail;
