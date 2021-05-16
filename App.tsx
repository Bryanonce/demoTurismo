import { Routing } from './src/Routing'
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const App:React.FC = () => {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  )
}
