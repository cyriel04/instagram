import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
}
class CardSection extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

export default CardSection;
