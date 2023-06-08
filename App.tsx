import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RouterComponents} from './src/navigation/appNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <RouterComponents />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
