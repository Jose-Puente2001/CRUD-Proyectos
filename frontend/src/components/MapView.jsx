import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapView = ({ setLocation }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [country, setCountry] = useState(null);

  const handleMapClick = async (e) => {
    setMarkerPosition(e.latlng);
    const { lat, lng } = e.latlng;
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const { address } = response.data;
      const country = address?.country;
      setCountry(country);
    } catch (error) {
      console.error('Error fetching country:', error);
    }

    setLocation({ country });
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return markerPosition === null ? null : (
      <Marker position={markerPosition} interactive={false}>
        <Popup>
          Latitude: {markerPosition.lat}<br />
          Longitude: {markerPosition.lng}
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '400px', width: '450px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapView;