import React from 'react'

import { MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import {Grid} from "@mui/material";

interface IOpenStreetMap {
    drawer: JSX.Element[] | JSX.Element
}

const OpenStreeMap = ({drawer}:IOpenStreetMap) => {
    return(
        <Grid sx={{

        }}>
            {drawer}
            <MapContainer
                center={[38.734802, 35.467987]}
                zoom={13}
                scrollWheelZoom={true}
                style={{
                    width: '100vw',
                    height: '100vh',
                    position:"absolute",
                    overflow:""
                }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
        </Grid>
    )
}

export default OpenStreeMap
