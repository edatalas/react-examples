import React, { useState, useRef, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";


const mapOptions = {
    mapId:"1",
    center: { lat: 43, lng:-79},
    zoom: 20,
    disableDefaultUI: true,
    heading: 25,
    tilt: 25
}


const MyMap = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(()=>{
        if (ref.current) {
            const instance = new window.google.maps.Map(ref.current, mapOptions);
            setMap(instance);
        }
    },[ref.current])

    //@ts-ignore
    return <div ref={ref} id="map" />
}

const GoogleMap = () => {
    return (
        <Wrapper apiKey={""}>
            <MyMap/>
       </Wrapper>
    )
}


export default GoogleMap