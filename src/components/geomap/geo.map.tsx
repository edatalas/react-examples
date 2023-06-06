import React from "react"
import {Box, Grid} from "@mui/material";

interface IGeoMap {
    drawers: JSX.Element[] | JSX.Element
    map: JSX.Element[] | JSX.Element
}

const GeoMap = (props:IGeoMap) => {
    return(
        <>
            {props.drawers}
            {props.map}
        </>

    )
}

export default GeoMap
