import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '80vh'
};

const center = {
    lat: -10,
    lng: -84
};

function Map() {
    const [markerPosition, setMarkerPosition] = useState(null);

    function handleMapClick(event) {
        setMarkerPosition({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c"//"AIzaSyBgYKHZB_QKKLWfIRaYPCadza3nhTAbv7c" //"AIzaSyCbVAN4JyheZw7_PjJ5deOrTmySOWUCPjg"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onClick={handleMapClick}
            >
                {markerPosition && (
                    <Marker position={markerPosition} />
                )}
            </GoogleMap>
        </LoadScript>
    )
}


export default Map;
