import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../styles/styles';

import HomePage from '../pages/homePage';


const Tab = createBottomTabNavigator();

const MainRoute = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              if (route.name === 'Home') {
                return <MaterialIcons name="home" size={24} color={color} />
              } else if (route.name === 'Trade') {
                return <Fontisto name="arrow-swap" size={24} color={color} />
              }
            },
            tabBarActiveTintColor: theme.colors.colorPrimary,
            tabBarInactiveTintColor: theme.colors.black,
          })}
        >
            <Tab.Screen name="Home" component={HomePage} options={{
                headerShown: false
            }} />
          
        </Tab.Navigator>
    );
}

export default MainRoute;


