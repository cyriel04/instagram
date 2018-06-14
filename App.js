import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import Footer from './src/components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Instagram" />
        <AlbumList />
        <Footer />
      </View>
    );
  }
}

