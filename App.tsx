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
    'Sora-Bold': require('./assets/fonts/Sora-Bold.ttf'),
    'Sora-Regular': require('./assets/fonts/Sora-Regular.ttf'),
    'Sora-Medium': require('./assets/fonts/Sora-Medium.ttf'),
    'Sora-Light': require('./assets/fonts/Sora-Light.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={LoginPage}   options={{
          headerTitle:""
        }} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;