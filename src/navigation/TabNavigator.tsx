import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/SimpleLineIcons';

import BagIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Send from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeNavigation from './HomeNavigation';
import FavouriteGames from '../screens/FavouriteGames';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <HomeIcon name="home" color={focused ? 'black' : ''} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="fav"
        component={FavouriteGames}
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Send name="details" color={focused ? 'black' : ''} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
