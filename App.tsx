import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native' //'@react-navigation/native';
import { Routing } from './src/Routing'

export const App:React.FC = () => {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  )
}
