import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Family from '../tree/Family';
import Storage from '../calendar/Storage';

// const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Family" component={Family} />
        <Tab.Screen name="Calendar" component={Storage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
