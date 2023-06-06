import React, {useEffect, useState, Fragment} from 'react';

import 'leaflet/dist/leaflet.css';
import GeoMap from "./components/geomap/geo.map";
import OpenStreetMap from "./components/geomap/openStreet.map";
import MapLeftDrawer from "./components/navigation/drawer/map.left.drawer";
import MapRightDrawer from "./components/navigation/drawer/map.right.drawer";
import {stat} from "fs";
import MapBoxGL from "./components/geomap/mapBoxGL";
import {
    CssBaseline,
    AppBar, Toolbar
} from "@mui/material";

export enum Status {
    google = "google",
    mapbox = "mapbox",
    openstreet = "openstreet",
}

const App = () => {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false)
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)

    const [map, setMap] = useState<Status>(Status.openstreet);

    useEffect(()=>{
        setMap(Status.openstreet);
        console.log(map)
    },[map])
    return (
        <Fragment>
            <CssBaseline />
            <>
                <GeoMap
                    drawers={
                        <>
                            <MapLeftDrawer
                                drawerOpen={leftDrawerOpen}
                                drawerClose={(status)=>setLeftDrawerOpen(status)}
                                rightDrawerOpen={(status)=>setRightDrawerOpen(status)}
                            />
                            <MapRightDrawer
                                drawerOpen={rightDrawerOpen}
                                drawerClose={(status)=>setRightDrawerOpen(status)}/>
                        </>
                    }
                    map={
                        map == "openstreet" ?
                            <OpenStreetMap leftDrawerOpen={(status)=>setLeftDrawerOpen(status)}/>
                            :
                            <MapBoxGL/>
                    }/>
            </>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>

                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default App
