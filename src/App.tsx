import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const App = () => {
    return (
      <MapContainer
        center={[38.734802, 35.467987]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
}

export default App