import React from 'react';

import 'leaflet/dist/leaflet.css';
import GeoMap from "./components/geomap/geo.map";
import OpenStreetMap from "./components/geomap/openStreet.map";
import GeoMapDrawer from "./components/navigation/drawer/geo.map.drawer";
const App = () => {
    return (
        <GeoMap map={<OpenStreetMap drawer={<GeoMapDrawer/>}/>}></GeoMap>
    );
}

export default App
