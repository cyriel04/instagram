import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements'

const styles = {
    viewStyle: {
    }
}
  
const component1 = () => <Icon name='home' type='foundation' onPress={ ()=> console.log('home') }/>
const component2 = () => <Icon name='search' type='Feather' />
const component3 = () => <Icon name='plus-square' type='feather' />
const component4 = () => <Icon name='heartbeat' type='font-awesome' />
const component5 = () => <Icon name='user' type='feather' />


class Footer extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
        }

  render() {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }, { element: component4 }, { element: component5 }]
    const { selectedIndex } = this.state
    return (
      <View style={styles.viewStyle}>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons} 
            innerBorderStyle={{ width: 0, color:'white' }}
            underlayColor='#eee' />
      </View>
    );
  }
}

export default Footer;

