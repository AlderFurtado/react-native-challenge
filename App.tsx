import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { theme } from './src/styles/styles';

import { store } from './store'
import { Provider } from 'react-redux'
import AuthRoute from './src/routes/authRoute';

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
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <AuthRoute/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;