import React, { PureComponent } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, Platform, Image } from "react-native";
import { connect } from "react-redux";

import { logo } from "./../../assests/assets";
import { theme } from '../../themes';
import { Header, Icon } from 'react-native-elements';

export default class EntreHeader extends React.Component {

  render() {
    let { leftComponent, centerComponent, rightComponent, style, navigation } = this.props;

    if (!leftComponent) {
      leftComponent = <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Icon
          type='material'
          name='menu'
          size={30}
          color='black'
        />
      </TouchableOpacity>;
    }
    if (!rightComponent) {
      rightComponent = <TouchableOpacity onPress={()=>navigation.navigate('MessageListScreen')}>
        <Icon
          type='material'
          name='mail'
          size={30}
          color='black'
        />
      </TouchableOpacity>;
    }
    if (!centerComponent) {
      centerComponent = <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={styles.logo} >
        <Image 
        style={styles.logo} 
        source={logo}
      /></TouchableOpacity>;
    }

    return (
      <Header
        containerStyle={styles.container}
        leftComponent={leftComponent}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#FFF',
    borderBottomWidth: 0
  },

  logo: {
    width: 80, 
    height: 30
  },
});

