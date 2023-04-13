import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import MainRoute from './mainRoute';

const Stack = createNativeStackNavigator();


const AuthRoute = () => {
  return  <Stack.Navigator>
    <Stack.Screen name="Login"  component={LoginPage}   options={{
      headerTitle:""
    }} />
    <Stack.Screen name="Register" component={RegisterPage} 
      options={{
        headerTitle:""
      }}
    />
    <Stack.Screen name="Home" component={MainRoute} 
        options={{
            headerShown: false
        }}
    />
  </Stack.Navigator>;
}

export default AuthRoute;