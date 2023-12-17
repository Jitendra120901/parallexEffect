import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import HomeNavigation from './HomeNavigation';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true && (
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
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
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
