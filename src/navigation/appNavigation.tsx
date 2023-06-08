import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const RouterComponents = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // statusBarColor: 'black',
          // statusBarStyle: 'light',
        }}>
        <Stack.Screen name="WeatherScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
