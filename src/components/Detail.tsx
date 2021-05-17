import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IDetail {
    detalle: string,
    onPress: () => void
}

export const Detail: React.FC<IDetail> = ({ detalle, onPress }: IDetail) => {
    return (
        <View
            style={{
                position: 'absolute',
                zIndex: 10,
                bottom: 60,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                (detalle !== "") ?
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'blue',
                            paddingVertical: 15,
                            paddingHorizontal: 40,
                            borderRadius: 25
                        }}
                        onPress={onPress}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color: '#fff',
                                fontSize: 20
                            }}
                        >{detalle}</Text>
                    </TouchableOpacity>
                    :
                    null
            }

        </View>
    )
}
