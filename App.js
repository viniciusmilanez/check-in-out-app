import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { BottomNav } from './src/components/BottomNav/index';
import { NavigationContainer } from '@react-navigation/native';
import { PrincipalProvider } from './src/context/PrincipalProvider';
import Notificacao from './src/components/Notificacao/index';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};


const Navigation = () => {

  return (
    <NavigationContainer >
      <BottomNav />
    </NavigationContainer>
  )
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <PrincipalProvider>
        <Notificacao/>
        <Navigation />
      </PrincipalProvider>
    </PaperProvider>
  );
}