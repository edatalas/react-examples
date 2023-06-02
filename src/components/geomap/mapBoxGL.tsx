import React, { useRef, useState, useEffect } from 'react';

/**
 * @typedef {import('mapbox-gl').Map} MapboxMap
 */
import mapboxgl from 'mapbox-gl';

/**
 * @typedef {import('mapbox-gl').Style} MapboxStyle
 * @typedef {import('@mui/material').BoxProps} BoxProps
 * @typedef {import('@mui/material').ContainerProps} ContainerProps
 * @typedef {import('@mui/material').GridProps} GridProps
 * @typedef {import('@mui/material').SwitchProps} SwitchProps
 * @typedef {import('@mui/material').SliderProps} SliderProps
 */
import {
    Box,
    Grid,
    Switch,
    Slider
} from '@mui/material';

mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFydW51cmlzb25tZXoiLCJhIjoiY2xpZXhpanljMGR3ODNkcDYzOXlhYWhhZiJ9.CKiSRziILv4j1Zt5eDHKBA';

/**
 * A React component that renders a MapBox GL map.
 * @component
 */
const MapBoxGL = () => {

    /**
     * Reference to the map container element.
     * @type {React.RefObject<HTMLDivElement | null>}
     */
    const mapContainer = useRef<HTMLDivElement | null>(null);

    /**
     * Reference to the map instance.
     * @type {React.MutableRefObject<mapboxgl.Map | null>}
     */
    const map = useRef<mapboxgl.Map | null>(null);

    /**
     * Longitude state.
     * @type {number}
     */
    const [lng, setLng] = useState(35.467987);

    /**
     * Latitude state.
     * @type {number}
     */
    const [lat, setLat] = useState(38.734802);

    /**
     * Zoom state.
     * @type {number}
     */
    const [zoom, setZoom] = useState(9);

    /**
     * Dark mode state.
     * @type {boolean}
     */
    const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode switch durumu

    /**
     * Pitch state.
     * @type {number}
     */
    const [pitch, setPitch] = useState(60);

    /**
     * Effect that runs when isDarkMode or pitch state changes.
     */
    useEffect(() => {

        //if (map.current || !mapContainer.current) return; // initialize map only once and when container is available

        map.current = new mapboxgl.Map({
            //@ts-ignore
            container: mapContainer.current,
            style: isDarkMode ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            bearing: 10,
            pitch: pitch,
            antialias: true // create the gl context with MSAA antialiasing, so custom layers are antialiased

        });

    }, [isDarkMode, pitch]);

    /**
     * Handles the toggle dark mode event.
     */
    const handleToggleDarkMode = () => {
        console.log(isDarkMode)
        setIsDarkMode(!isDarkMode);
    };

    /**
     * Handles the slider change event.
     * @param {Event} event - The event object.
     * @param {number | number[]} newValue - The new value.
     */
    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setPitch(newValue as number);
    };

    return (

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box
                        ref={mapContainer}
                        sx={{
                            width: '99vw',
                            height: '98vh',
                        }}
                    >
                        <Switch
                            checked={isDarkMode}
                            onChange={handleToggleDarkMode}
                            sx={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                zIndex: 500,
                            }}
                        />
                        <Slider
                            sx={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '0',
                                zIndex: 500,
                                '& .MuiSlider-root': {
                                    width: '100px',
                                },
                            }}
                            orientation="vertical"
                            defaultValue={10}
                            min={0}
                            max={100}
                            step={1}
                            aria-label="Pitch"
                            valueLabelDisplay="auto"
                            value={pitch}
                            onChange={handleSliderChange}
                        />
                    </Box>
                </Grid>
            </Grid>

    );
};

export default MapBoxGL;