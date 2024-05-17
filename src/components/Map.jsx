import { useEffect, useRef } from 'react'
import { Map as LeafletMap } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './components.css'

export default function Map({ place }) {
    const mapRef = useRef(<LeafletMap></LeafletMap>)

    useEffect(() => {
        if (mapRef.current && place) {
            mapRef.current.flyTo([place.latitude, place.longitude])
        }
    }, [place])

    return (
        <div className="map-container">
            <MapContainer
                ref={mapRef}
                center={[33.7, -84.4]}
                zoom={10}
                scrollWheelZoom
                className="map"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {place && <Marker position={[place.latitude, place.longitude]}></Marker>}
            </MapContainer>
        </div>
    )
}