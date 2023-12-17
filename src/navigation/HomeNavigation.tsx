import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontSize: 19,
            fontFamily: 'italic',
            // fontWeight: '600',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#007bff',
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontSize: 19,
            fontFamily: 'italic',
            // fontWeight: '600',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#007bff',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
