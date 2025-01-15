import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map(props) {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [address, setAddress] = useState(null);

    const defaultPosition = { latitude: props.location[1], longitude: props.location[0] };

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = leaflet
                .map(mapContainerRef.current, {
                    attributionControl: false,
                })
                .setView([defaultPosition.latitude, defaultPosition.longitude], 13);

            leaflet
                .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                })
                .addTo(mapRef.current);

            const marker = leaflet.marker([defaultPosition.latitude, defaultPosition.longitude]).addTo(mapRef.current);

            const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY;
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${defaultPosition.latitude}+${defaultPosition.longitude}&key=${apiKey}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.results.length > 0) {
                        const placeName = data.results[0]?.formatted;
                        setAddress(placeName);
                        marker.bindPopup(placeName).openPopup();
                    }
                })
                .catch((error) => {
                    if (meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                        console.error(error.message);
                    }
                });
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);
    return props?.iframe ? (
        <div className="map_iframe" dangerouslySetInnerHTML={{ __html: props?.iframe }}></div>
    ) : (
        <div
            ref={mapContainerRef}
            id="map"
            style={{
                width: '100%',
                height: '100%',
                border: '1px solid #ccc',
            }}
        ></div>
    );
}
