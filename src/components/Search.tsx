import React, { useState } from 'react'
import { NativeSyntheticEvent, StyleProp, Text, TextInputChangeEventData, TextStyle, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useForm, Controller } from "react-hook-form";
import { SearchResult } from './SearchResult';
import { ILocationRef, MarkerReferences } from '../db/db';
import { IGps } from '../views/Maper';

interface ISearchProps {
    styles: {
        bg: StyleProp<ViewStyle>,
        text: StyleProp<TextStyle>,
        input: StyleProp<TextStyle>
    },
    setGpsState: React.Dispatch<React.SetStateAction<IGps>>
}

interface IData {
    search: string
}

export const Search: React.FC<ISearchProps> = ({ styles, setGpsState }: ISearchProps) => {

    const { control, handleSubmit, reset } = useForm();
    const markers = MarkerReferences();
    const [filter, setFilter] = useState<ILocationRef[]>([])

    return (
        <View
            style={{
                position: 'absolute',
                width: '100%'
            }}
        >
            <View
                style={styles.bg}
            >
                <Text style={styles.text}>Busqueda</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => {
                                onChange(value)
                                if (value !== "") {
                                    setFilter(markers.filter(marker => marker.name.toUpperCase().indexOf(value.toUpperCase()) !== -1))
                                } else {
                                    setFilter([])
                                }
                            }}
                            value={value}
                        />
                    )}
                    name="search"
                    rules={{ required: true }}
                    defaultValue=""
                />
            </View>

            {
                (setFilter.length > 0) ?
                    <SearchResult
                        setGpsState={setGpsState}
                        filter={filter}
                        reset={reset}
                        setFilter={setFilter}
                    />
                    :
                    null
            }


        </View>
    )
}
