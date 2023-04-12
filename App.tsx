import * as React from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { theme } from './src/styles/styles';
import LoginPage from './src/pages/loginPage';
import RegisterPage from './src/pages/registerPage';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.while,
  },
};

function App() {

  const [fontsLoaded] = useFonts({
    'Sora': require('./assets/fonts/Sora.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login"  component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;