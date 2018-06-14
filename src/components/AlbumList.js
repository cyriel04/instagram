import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Album from './Album';

class AlbumList extends Component {
  state = {
      album: []
  }
  componentWillMount () {
      console.log("sad")
    //   axios('https://rallycoding.herokuapp.com/api/music_albums').then
    //   (res => this.setState({ album: res.data })

    axios('https://randomuser.me/api/?results=10').then
      (res => this.setState({ album: res.data.results })
    )
  }
  renderAlbums() {
    return this.state.album.map(album => 
        <Album key={album.email} album={album}/>
    )
  }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
