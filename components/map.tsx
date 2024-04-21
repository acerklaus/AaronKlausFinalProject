import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import MapView from 'react-native-maps';
import { IconButton } from 'react-native-paper';



type City = {
  longitude: number
  latitude: number
  name: string
}

const randomNumberInRange = () => {
  return Math.floor(Math.random()
      * (4 - 0 + 1));
};

const Map = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cityIndex, setCityIndex] = useState(0)
  const [score, setScore] = useState(1)

  const handleGuess = async function(guess: string)  {
    if(guess == searchValue) {
      setScore(score + 1)
      Alert.alert('Correct! your score is ' + score)
      setSearchValue('')
    } else {
      Alert.alert('Wrong! Take another guess.')
    }
  }

  useEffect(() => {
    setCityIndex(randomNumberInRange())
  }, [score])
    return (  
      <>
       <View style={styles.searchBar}>
       <TextInput
          style={styles.input}
          placeholder='Enter Guess'
          value={searchValue}
          onChangeText={(e) => setSearchValue(e)}
      />
      <IconButton
          icon="magnify"
          size={40}
          onPress={() => {handleGuess(cities[cityIndex].name)}}
  />
  </ View>
     <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            zoomEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            customMapStyle={mapStyle}
            style={styles.mapStyle}
            mapType='terrain'
            region={{ 
              latitude: cities[cityIndex].latitude,
              longitude: cities[cityIndex].longitude,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}
            >
          </MapView>
        </View>
        </SafeAreaView>
        </>
    );
  };

  export default Map;

  const cities: Array<City> = [
    {
        latitude: 37.733795,
        longitude: -122.446747,
        name: "San Francisco",
    },
    {
        latitude:  47.620564,
        longitude: -122.350616,
        name: "Seattle",
    },
    {
        latitude: 38.5816,
        longitude: -121.4944,
        name: "Sacramento",
    },
    {
        longitude: -84.5100,
        latitude: 39.103100,
        name: "Cincinnati",
    },
    {
        latitude: 30.2672,
        longitude: -97.7431,
        name: "Austin",
    }
];

  const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [{visibility: "off"}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [{visibility: "off"}]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [{visibility: "off"}]
    },
    {
      featureType: 'all',
      elementType: 'icon.fill',
      stylers: [{visibility: "off"}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
  ];

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    input: {
      width:250,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    searchBar: {
       flexDirection: 'row',
       justifyContent: 'space-between',
     },
  });