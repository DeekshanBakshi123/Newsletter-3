import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    }
  }



likecount=()=>{

this.setState({like:this.state.like+1});

};

dislikecount=()=>{

this.setState({dislike:this.state.dislike+1});

}



 
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('JokeScreen')}>
              <Text>Read a Joke</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HoroScope')}>
              <Text>Horoscope</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('WeatherScreen')}>
              <Text>Weather</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Text>Top News</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin: 5 }}>Rate us</Text>

            <TouchableOpacity onPress={this.likecount}>
           
           <View style={{marginTop:10,marginLeft:20}}>
              <Text>{this.state.like}</Text>
              </View>

              <Image
                style={{ width: 50, height: 50, marginLeft: 5, marginTop: 30 }}
                source={require('../assets/thumbsup.png')}
              />
               
            </TouchableOpacity>
            <TouchableOpacity onPress={this.dislikecount}>

            
            
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbsdown.png')}
              />

              <View style={{marginLeft:120,marginTop:-114.5}}>
            <Text>
            {this.state.dislike}
            </Text>
            </View>
            
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
  


    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
