/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Pressable, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import axios from 'axios';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [condition, setCondition] = useState('');
  const [locationName, setLocationName] = useState('');
  const [convertF, setConvertF] = useState(true);

  const handleSearch = async () => {
    try {
      const apiKey = '615461eae2e40e577a93b4c4f835057d';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
      );
      const {main, weather} = response.data;
      const {temp} = main;
      const {main: condition} = weather[0];
      console.log('weather response : ', response.data.name);
      const degreeTemp = temp - 273;
      setTemperature(Math.round(degreeTemp));
      setCondition(condition);
      setLocationName(response.data.name);
    } catch (error) {
      console.error('request error', error);
    }
  };
  const convertToF = (cel: number) => {
    return (cel * (9 / 5) + 32).toFixed(2);
  };

  return (
    <SafeAreaProvider>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={
          condition === ''
            ? require('../assets/images/sun.jpeg')
            : condition === 'sunny'
            ? require('../assets/images/sun.jpeg')
            : condition === 'Clear'
            ? require('../assets/images/sun.jpeg')
            : require('../assets/images/cloudy.jpeg')
        }>
        {/* <TopHeader /> */}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter a city or zip code"
            value={location}
            onChangeText={setLocation}
          />
          <View style={styles.buttonCover}>
            <Pressable style={styles.button} onPress={handleSearch}>
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </View>

          <Text style={styles.locName}>{locationName}</Text>

          {!convertF && (
            <Text style={styles.temperature}>{temperature} °C</Text>
          )}
          {convertF && (
            <Text style={styles.temperature}>{convertToF(temperature)} °F</Text>
          )}
          <Text style={styles.condition}>{condition}</Text>
          {/* Display weather information here */}

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30%',
            }}>
            <View
              style={{
                backgroundColor: 'blue',
                paddingHorizontal: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: '1%',
                paddingBottom: '2%',
                borderRadius: 10,
              }}>
              <Pressable onPress={() => setConvertF(!convertF)}>
                {convertF && (
                  <Text style={[styles.locName, {fontSize: 18}]}>Celsius</Text>
                )}
                {!convertF && (
                  <Text style={[styles.locName, {fontSize: 18}]}>
                    Fahrenheit
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
};
