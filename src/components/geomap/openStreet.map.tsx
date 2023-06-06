import React, {useState, useRef, useEffect} from 'react'

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    ZoomControl,
    useMapEvents,
    Circle,
    Polyline,
    Tooltip
} from "react-leaflet";
import {LatLngExpression} from 'leaflet';

import 'leaflet/dist/leaflet.css';
import {Grid} from "@mui/material";
import L from 'leaflet';
import {withMap, MapDrawerButton} from "../button/map.drawer.button";

interface IOpenStreetMap {
    leftDrawerOpen: (status: boolean) => void
}

const OpenStreeMap = (props: IOpenStreetMap) => {
    const truckIcon = L.icon({
        iconUrl: 'https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/48/truck-front-01-512.png',
        iconSize: [32, 32],
    });

    const [circleCenter, setCircleCenter] = useState<[number, number] | null>(null);
    const [circleRadius, setCircleRadius] = useState<number>(0);

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const prevMousePosition = useRef<[number, number] | null>(null);

    const DescriptionWithMap = withMap(MapDrawerButton);
    const [isSecondClick, setIsSecondClick] = useState(false);

    const [isDrawing, setIsDrawing] = useState(false);


    const handleMapClick = (event: L.LeafletMouseEvent) => {
        const {lat, lng} = event.latlng;
        if (!circleCenter) {
            setCircleCenter([lat, lng]);
            setIsSecondClick(false);
        } else if (!isSecondClick) {
            setIsSecondClick(true);
        } else {
            if (!circleRadius) {
                const distance = calculateDistance(circleCenter[0], circleCenter[1], lat, lng);
                setCircleRadius(distance);
            }
            setIsSecondClick(false);
            setIsDrawing(false); // İşlem tamamlandığında çizim işaretleyicisini devre dışı bırak

        }
    };

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // Yeryüzü'nün ortalama yarıçapı (km)
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    };

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    const CircleLabel = () => {
        const map = useMap();
        const labelRef = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            if (circleCenter && labelRef.current) {
                const labelPosition = map.latLngToContainerPoint(circleCenter);
                labelRef.current.style.position = 'absolute';
                labelRef.current.style.transform = `translate(-50%, -50%)`;
                labelRef.current.style.left = `${labelPosition.x}px`;
                labelRef.current.style.top = `${labelPosition.y}px`;
            }
        }, [circleCenter, map]);

        return (

            <Popup position={lineCoordinates[1]}>{circleRadius.toFixed(2)} km</Popup>
        )
    };

    const handleMouseMove = (event: L.LeafletMouseEvent) => {
        if (isDragging && circleCenter && !isSecondClick) {
            const {lat, lng} = event.latlng;
            const prevLat = prevMousePosition.current ? prevMousePosition.current[0] : lat;
            const prevLng = prevMousePosition.current ? prevMousePosition.current[1] : lng;
            const distance = Math.sqrt(Math.pow(lat - circleCenter[0], 2) + Math.pow(lng - circleCenter[1], 2));
            const prevDistance = Math.sqrt(Math.pow(prevLat - circleCenter[0], 2) + Math.pow(prevLng - circleCenter[1], 2));
            const radiusDelta = (distance - prevDistance) * 100000;
            setCircleRadius((prevRadius) => Math.max(prevRadius + radiusDelta, 0)); // Negatif yarıçapı engelle
            prevMousePosition.current = [lat, lng];
        }
    };

    const handleMouseUp = () => {
        setIsDrawing(false);

    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const MapEventsHandler = () => {
        const map = useMap();
        map.on('click', handleMapClick)
        map.on('mousemove', handleMouseMove);
        map.on('mousedown', handleMouseDown);
        map.on('mouseup', handleMouseUp);
        useEffect(() => {
            if (isDrawing) {
                map.on('mousemove', handleMouseMove);
                map.on('mousedown', handleMouseDown);
                map.on('mouseup', handleMouseUp);
            }
            return () => {
                map.off('mousemove', handleMouseMove);
                map.off('mousedown', handleMouseDown);
                map.off('mouseup', handleMouseUp);
                map.off('click', handleMapClick)
            };
        }, [map, isDrawing]);

        return null;
    };

    const lineCoordinates: LatLngExpression[] = circleCenter ? [[...circleCenter], [circleCenter[0] + circleRadius / 100000, circleCenter[1]]] : [];

    return (
        <Grid>
            <MapContainer
                center={[38.734802, 35.467987]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{
                    width: '99vw',
                    height: '99vh',
                    position: "absolute",
                    overflow: ""
                }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[38.734802, 35.467987]} title={"Araç Bilgisi"} icon={truckIcon}>
                    <Popup>
                        Truck Location
                    </Popup>
                </Marker>
                {circleCenter && <Circle center={circleCenter} radius={circleRadius}/>}
                {lineCoordinates.length > 0 && (
                    <>
                        <Polyline positions={lineCoordinates}/>
                    </>
                )}
                {circleCenter && circleRadius && (
                    <>
                        <Circle center={circleCenter} radius={circleRadius}/>
                        <CircleLabel/>
                    </>
                )}
                {
                    circleCenter && <CircleLabel/>
                }
                {
                    circleCenter && <MapEventsHandler/>
                }
                <DescriptionWithMap drawer={(status) => props.leftDrawerOpen(status)}></DescriptionWithMap>
                <ZoomControl position={"bottomright"}/>
                <MapEventsHandler/>
            </MapContainer>
        </Grid>
    )
}

export default OpenStreeMap
