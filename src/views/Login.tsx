import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationType } from '../types/Navigation'

interface LoginProps extends StackScreenProps<StackNavigationType, 'Login'>{}

export const Login:React.FC<LoginProps> = ({navigation}:LoginProps) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 40
            }}
        >
            <Text
                style={{
                    width: '100%'
                }}
            >Usuario</Text>
            <TextInput
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    paddingHorizontal: 10,
                    marginBottom: 40
                }}
            ></TextInput>
            <Text
                style={{
                    width: '100%'
                }}
            >Password</Text>
            <TextInput
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    paddingHorizontal: 10,
                    marginBottom: 40,
                }}
            ></TextInput>

            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    paddingVertical: 15,
                    paddingHorizontal: 40,
                    borderRadius: 15
                }}
                onPress={()=>{navigation.navigate('Mapa')}}
            >
                <Text style={{color: '#fff', fontSize: 20}}>Ingrese</Text>
            </TouchableOpacity>
        </View>
    )
}
