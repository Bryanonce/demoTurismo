import React, { useState } from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { Detail } from '../components/Detail';
import { Search } from '../components/Search';
import { MarkerReferences } from '../db/db';
const GOOGLE_MAPS_APIKEY = "AIzaSyBOgXn4lc_aY6wvfqGWi74nRs-cf0FdMkg"

export interface IGps {
    latitude: number,
    longitude: number,
}

export const Maper: React.FC = () => {
    const markers = MarkerReferences();

    const gps: IGps = {
        latitude: -2.138788,
        longitude: -79.888499,
    }

    const floresta: IGps = {
        latitude: -2.256177,
        longitude: -79.886170,
    }

    const [gpsState, setGpsState] = useState<IGps>(gps);
    const [gpsMe, setGpsMe] = useState<IGps>(gps);
    const [gpsCenter, setGpsCenter] = useState<IGps>(gps)
    const [detalle, setDetalle] = useState<string>("");

    const chooseDir = (type: string): ImageSourcePropType => {
        switch (type) {
            case "hotel":
                return require("../icons/hotel-solid.jpg");
            case "restaurant":
                return require("../icons/utensils-solid.jpg");
            case "turismo":
                return require("../icons/tram-solid.jpg");
            default:
                return require("../icons/hotel-solid.jpg");
        }
    }

    return (
        <View style={{
            flex: 1
        }}>
            <Search
                gpsState={gpsMe}
                setGpsCenter={setGpsCenter}
                setGpsState={setGpsState}
                setDetalle={setDetalle}
                styles={{
                    bg: {
                        backgroundColor: '#fff',
                        zIndex: 10,
                        flexDirection: 'row',
                        width: '100%',
                    },
                    text: {
                        fontSize: 15,
                        paddingVertical: 15,
                        flex: 0.3,
                        textAlign: 'center'
                    },
                    input: {
                        fontSize: 15,
                        paddingVertical: 15,
                        backgroundColor: '#ccc',
                        flex: 0.7,
                        paddingLeft: 15
                    }
                }}
            />
            <MapView
                moveOnMarkerPress={false}
                region={{
                    ...gpsCenter,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.000921
                }}
                provider={PROVIDER_GOOGLE}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                {
                    markers.map((marker, index) => {
                        const { type } = marker;
                        return (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: marker.lat,
                                    longitude: marker.lon
                                }}
                                title={marker.name}
                                description={marker.description}
                                onPress={() => {
                                    setGpsState({
                                        latitude: marker.lat,
                                        longitude: marker.lon
                                    })
                                    setGpsCenter({
                                        ...gpsMe
                                    })
                                    setDetalle(marker.name)
                                }}
                            >
                                <Image
                                    source={chooseDir(type)}
                                    style={{
                                        width: 28,
                                        height: 28
                                    }}
                                />
                            </Marker>
                        )
                    })
                }

                <Marker
                    coordinate={gpsMe}
                    title="Yo"
                    description="Posicion Inicial"
                    draggable={true}
                    onDragEnd={({ nativeEvent }) => {
                        setGpsMe({
                            latitude: nativeEvent.coordinate.latitude,
                            longitude: nativeEvent.coordinate.longitude
                        })
                        setGpsCenter({
                            latitude: nativeEvent.coordinate.latitude,
                            longitude: nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Image
                        source={require("../icons/car-solid.jpg")}
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: 15
                        }}
                    />
                </Marker>

                <MapViewDirections
                    origin={gpsMe}
                    strokeColor="green"
                    strokeWidth={3}
                    destination={gpsState}
                    apikey={GOOGLE_MAPS_APIKEY}
                    mode="DRIVING"
                />
            </MapView>
            <Detail 
                detalle={detalle}
                onPress={()=>setGpsCenter({
                    ...gpsState
                })}
            />
        </View>
    )
}
