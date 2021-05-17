import React from 'react'
import { FieldValues, UseFormReset } from 'react-hook-form'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ILocationRef } from '../db/db'
import { IGps } from '../views/Maper'

interface ISearchProps {
    filter: ILocationRef[],
    setFilter: React.Dispatch<React.SetStateAction<ILocationRef[]>>,
    setGpsState: React.Dispatch<React.SetStateAction<IGps>>,
    reset: UseFormReset<FieldValues>,
    setDetalle: React.Dispatch<React.SetStateAction<string>>,
    setGpsCenter: React.Dispatch<React.SetStateAction<IGps>>,
    gpsState: IGps
}

export const SearchResult: React.FC<ISearchProps> = ({ filter, setFilter, setGpsState, reset, setDetalle, setGpsCenter, gpsState }: ISearchProps) => {

    return (
        <View
            style={{
                zIndex: 10,
                paddingHorizontal: 15,
                backgroundColor: '#fff',
            }}
        >
            {
                filter.map((location, index) => {
                    return (<View key={index}>
                        <TouchableOpacity
                            onPress={() => {
                                setGpsState({
                                    latitude: location.lat,
                                    longitude: location.lon
                                })
                                setGpsCenter({
                                    ...gpsState
                                })
                                setDetalle(location.name)
                                reset()
                                setFilter([])
                            }}
                        >
                            <Text
                                style={{
                                    paddingHorizontal: 15,
                                    backgroundColor: '#fff',
                                    width: '100%',
                                    paddingVertical: 15
                                }}
                            >{location.name}</Text>
                        </TouchableOpacity>
                    </View>)

                })
            }
        </View>
    )
}
