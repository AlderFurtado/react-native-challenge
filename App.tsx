import * as React from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { theme } from './src/styles/styles';



function HomeScreen() {
  return (
    <View style={{ flex: 1,padding:16, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;