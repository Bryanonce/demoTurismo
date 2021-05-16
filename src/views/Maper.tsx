import React, { useState } from 'react'
import { Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { MarkerReferences } from '../db/db';
const GOOGLE_MAPS_APIKEY = "AIzaSyBOgXn4lc_aY6wvfqGWi74nRs-cf0FdMkg"

export const Maper: React.FC = () => {
    const markers = MarkerReferences();
    const marker = markers[0]
    console.log(markers)
    return (
        <View style={{
            flex: 1
        }}>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                initialRegion={{
                    latitude: -2.138788,
                    longitude: -79.888499,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.000921
                }}
            >
                {
                    markers.map((marker, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: marker.lat,
                                    longitude: marker.lon
                                }}
                                title={marker.name}
                                description={marker.description}
                            />
                        )
                    })
                }
            </MapView>
        </View>
    )
}
