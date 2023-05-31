import React from "react"
import {Box, Grid} from "@mui/material";

interface IGeoMap {
    map: JSX.Element[] | JSX.Element
}

const GeoMap = ({map}:IGeoMap) => {
    return(
        <>
            {map}
        </>

    )
}

export default GeoMap
