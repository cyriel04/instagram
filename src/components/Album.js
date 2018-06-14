import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

const styles = {
    headerTitleStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 26,
        borderWidth: 1,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    headerTextStyle: {
        fontSize: 18,
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    },
}
class Album extends Component {
  render() {
    return (
      <Card>
        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={{ uri: this.props.album.picture.thumbnail }} />
            </View>
            <View style={styles.headerTitleStyle}>
                <Text style={styles.headerTextStyle}>{this.props.album.login.username}</Text>
                <Text>{this.props.album.name.first} {this.props.album.name.last}</Text>
            </View>
        </CardSection>

        <CardSection>
                <Image style={styles.imageStyle} source={{ uri: this.props.album.picture.large }} />
        </CardSection>
        <CardSection>
                <Button pressIt={() => Linking.openURL('http://facebook.com')}>
                    Buy Now
                </Button>
        </CardSection>
        {/* <Image source={{uri: this.props.album.image }}></Image> */}
      </Card>
    );
  }
}

export default Album;
