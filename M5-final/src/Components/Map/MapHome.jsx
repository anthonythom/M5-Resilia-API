import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './mapHome.scss'

function MapHome() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAsal4of80rGC4bwZYe3laqiaJedXJa7a0"
    })

    const posicao = {
        lat: -8.079960,
        lng: -34.876660
    }
    return (
        <section className="secaoMaior">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={posicao}
                    zoom={15}

                >
                    <Marker position={posicao} />
                </GoogleMap>) : <> </>
            }
        </section>
    )
}

export default MapHome;