export interface ILocationRef {
    name: string,
    description: string,
    type: string,
    lat: number,
    lon: number
}

export const MarkerReferences = ():ILocationRef[]=> [
    {
        name: 'Hotel Green Palace',
        description: 'Description 1',
        type: 'hotel',
        lat: -2.142469,
        lon: -79.890080
    },
    {
        name: 'Hotel Nuevo Galeon',
        description: 'Description 2',
        type: 'hotel',
        lat: -2.136836,
        lon: -79.889885
    },
    {
        name: 'Restaurante Generico',
        description: 'Description 3',
        type: 'restaurant',
        lat: -2.135844,
        lon: -79.885260
    },
    {
        name: 'Terminal Terrestre',
        description: 'Description 4',
        type: 'turismo',
        lat: -2.141445,
        lon: -79.888040
    }
]