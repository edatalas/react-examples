import React from 'react'

import { MapContainer, Marker, Popup, TileLayer, useMap, ZoomControl} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import {Grid} from "@mui/material";
import L from 'leaflet';
interface IOpenStreetMap {
    drawer: JSX.Element[] | JSX.Element
}

const OpenStreeMap = ({drawer}:IOpenStreetMap) => {
    const truckIcon = L.icon({
        iconUrl: 'https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/48/truck-front-01-512.png',
        iconSize: [32, 32],
    });

    return(
        <Grid sx={{

        }}>
            {drawer}
            <MapContainer
                center={[38.734802, 35.467987]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{
                    width: '99vw',
                    height: '99vh',
                    position:"absolute",
                    overflow:""
                }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[38.734802, 35.467987]} title={"Araç Bilgisi"} icon={truckIcon}>
                    <Popup>
                        Truck Location
                    </Popup>
                </Marker>
                <ZoomControl position={"bottomright"}/>
            </MapContainer>
        </Grid>
    )
}

export default OpenStreeMap
