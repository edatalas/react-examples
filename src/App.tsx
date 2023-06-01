import React, {useEffect, useState} from 'react';

import 'leaflet/dist/leaflet.css';
import GeoMap from "./components/geomap/geo.map";
import OpenStreetMap from "./components/geomap/openStreet.map";
import MapLeftDrawer from "./components/navigation/drawer/map.left.drawer";
import MapRightDrawer from "./components/navigation/drawer/map.right.drawer";
import {stat} from "fs";

const App = () => {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false)
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)
    return (
        <GeoMap map={
            <OpenStreetMap
                leftDrawerOpen={(status)=>setLeftDrawerOpen(status)}
                drawers={
                    <>
                        <MapLeftDrawer
                            drawerOpen={leftDrawerOpen}
                            drawerClose={(status)=>setLeftDrawerOpen(status)}
                            rightDrawerOpen={(status)=>setRightDrawerOpen(status)}
                        />
                        <MapRightDrawer drawerOpen={rightDrawerOpen} drawerClose={(status)=>setRightDrawerOpen(status)}/>
                    </>
                }/>
        }/>
    );
}

export default App
