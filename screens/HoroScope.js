import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HoroScope extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to Horoscope </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
  },
  })