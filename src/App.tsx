import React, {useEffect, useState} from 'react';

import 'leaflet/dist/leaflet.css';
import GeoMap from "./components/geomap/geo.map";
import OpenStreetMap from "./components/geomap/openStreet.map";
import MapLeftDrawer from "./components/navigation/drawer/map.left.drawer";
import MapRightDrawer from "./components/navigation/drawer/map.right.drawer";

const App = () => {
    const [leftDrawerOpen, setLeftDrawer] = useState(false)

    return (
        <GeoMap map={
            <OpenStreetMap
                leftDrawerOpen={(status)=>setLeftDrawer(status)}
                drawers={
                    <>
                        <MapLeftDrawer drawerOpen={leftDrawerOpen} drawerClose={(status)=>setLeftDrawer(status)}/>
                        <MapRightDrawer/>
                    </>
                }/>
        }/>
    );
}

export default App
