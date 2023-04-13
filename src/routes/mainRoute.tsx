import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../styles/styles';
import { Feather } from '@expo/vector-icons'; 
import HomePage from '../pages/homePage';
import FundDetailsPage from '../pages/fundDetailsPage';
import PortfolioPage from '../pages/portifolioPage';


const Tab = createBottomTabNavigator();

const MainRoute = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              if (route.name === 'Main') {
                return <MaterialIcons name="home" size={24} color={color} />
              } else if (route.name === 'Trade') {
                return <Fontisto name="arrow-swap" size={24} color={color} />
              }else if(route.name == "Portfolio"){
                return <Feather name="pie-chart" size={24} color="black" />
              }
            },
            tabBarActiveTintColor: theme.colors.colorPrimary,
            tabBarInactiveTintColor: theme.colors.black,
          })}
        >
            <Tab.Screen name="Main" component={HomePage} options={{
                headerShown: false
            }} />
             <Tab.Screen name="Trade" component={FundDetailsPage} options={{
                headerShown: false
            }} />
            <Tab.Screen name="Portfolio" component={PortfolioPage} options={{
                headerShown: false
            }} />
        </Tab.Navigator>
    );
}

export default MainRoute;


