import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ListScreen from '../components/ListScreen';
import AddScreen from '../components/AddScreen';
import PushScreen from '../components/PushScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LIST" component={ListScreen} options={{ tabBarLabel: 'List' }} />
      <Tab.Screen name="ADD" component={AddScreen} options={{ tabBarLabel: 'Add' }} />
      <Tab.Screen name="PUSH" component={PushScreen} options={{ tabBarLabel: 'Push' }} />

    </Tab.Navigator>
  );
};

export default BottomNav;
