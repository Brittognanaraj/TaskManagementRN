import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../Screens/SplashScreen';
import TabNavigator from './TabNavigator';
import CreateTaskScreen from '../Screens/CreateTaskScreen';
import AllListScreen from '../Screens/AllListScreen';
import EditListScreen from '../Screens/EditListScreen';
import EditTaskScreen from '../Screens/EditTaskScreen';

const TaskStack = createStackNavigator();

export const verticalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
  headerShown: false,
};

export const screenNavigator = () => {
  return (
    <TaskStack.Navigator screenOptions={{gestureEnabled: false}}>
      <TaskStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false, animationEnabled: true}}
      />
      <TaskStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <TaskStack.Screen
        name="CreateTaskScreen"
        component={CreateTaskScreen}
        options={{headerShown: false, headerMode: false}}
        initialParams={{logout: false}}
      />
      <TaskStack.Screen
        name="AllListScreen"
        component={AllListScreen}
        options={{headerShown: false, headerMode: false}}
        initialParams={{logout: false}}
      />
      <TaskStack.Screen
        name="EditListScreen"
        component={EditListScreen}
        options={{headerShown: false, headerMode: false}}
        initialParams={{logout: false}}
      />
       <TaskStack.Screen
        name="EditTaskScreen"
        component={EditTaskScreen}
        options={{headerShown: false, headerMode: false}}
        initialParams={{logout: false}}
      />
      
    </TaskStack.Navigator>
  );
};
