import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashBoardScreen from '../Screens/DashBoardScreen';

const DashBoardStack = createStackNavigator();

const DashBoardNavigator = () => (
  <DashBoardStack.Navigator
    initialRouteName="DashBoardScreen"
    screenOptions={{gestureEnabled: false, headerShown: false}}
    options={{
      headerShown: false,
    }}>
    <DashBoardStack.Screen
      name="DashBoardScreen"
      component={DashBoardScreen}
      options={{headerShown: false, headerMode: false}}
      initialParams={{logout: false}}
    />
   
  </DashBoardStack.Navigator>
);
//make this component available to the app
export default DashBoardNavigator;
