import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './views/Login';
import { Maper } from './views/Maper';
import { Preview } from './views/Preview';

const Stack = createStackNavigator();


export const Routing: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="Mapa" options={{headerShown: false}} component={Maper} />
        </Stack.Navigator>
    )
}
