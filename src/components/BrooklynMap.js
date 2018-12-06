import React from 'react';
import { MapView } from 'expo'


export default class BrooklynMap extends React.Component {
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

