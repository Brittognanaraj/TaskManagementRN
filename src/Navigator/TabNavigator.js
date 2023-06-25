import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import DashBoardNavigator from './DashBoardNavigator';
import ActivityScreen from '../Screens/ActivityScreen';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = ({route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          backgroundColor: colors.tab.backgroundColor,
        },
      }}
      initialRouteName={'DashBoardScreen'}>
      <Tab.Screen
        name="DashBoardNav"
        tabBarTestID="dashboard-tab"
        component={DashBoardNavigator}
        params={route}
        options={
          ({headerShown: false, testID: 'dash-tab'},
          {tabBarTestID: 'dash-tab'},
          {
            tabBarIcon: ({focused, color, size}) => (
              <View>
                <Image
                  source={require('../../assets/images/icon/icn_task_list.png')}
                />
              </View>
            ),
          })
        }
        listeners={({navigation, route}) => ({
          tabPress: e => {
            //  navigation.goBack();
          },
        })}
      />

      <Tab.Screen
        name="ActivityScreen"
        testID="activity-tab"
        component={ActivityScreen}
        options={
          ({headerShown: false},
          {tabBarTestID: 'activity-tab'},
          {
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={require('../../assets/images/icon/icn_monitor.png')}
              />
            ),
          })
        }
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
