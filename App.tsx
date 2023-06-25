/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
 import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { screenNavigator } from './src/Navigator/Navigators';
import SplashScreen from './src/Screens/SplashScreen';
import NavigatorComp from './src/Navigator/NavigatorComp';

function App(): JSX.Element {
 
  return (
    <NavigationContainer>
   <NavigatorComp/>
   </NavigationContainer>
  );
}

 

export default App;
