import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './views/Login';
import { Maper } from './views/Maper';

const Stack = createStackNavigator();


export const Routing: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Mapa" component={Maper} />
        </Stack.Navigator>
    )
}
