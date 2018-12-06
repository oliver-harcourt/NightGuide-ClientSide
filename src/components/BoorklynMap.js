import React from 'react';
import { MapView } from 'expo'

const mapList = [
    { id: 1, name: 'Wellington Wind Turbine', latitude: -41.310868, longitude: 174.744861 },
    { id: 2, name: 'Mount Victoria Lookout', latitude: -41.295932, longitude: 174.794568 },
    {
        id: 3, name: 'Te Ahumairangi Hill Lookout', latitude: -41.274925, longitude: 174.765356
    },
    { id: 4, name: 'Red Rocks', latitude: -41.357376, longitude: 174.726562 }

]

export default class BooklynMap extends React.Component {
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: -41.310868,
                    longitude: 174.744861,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}

