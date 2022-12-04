import React from "react";
import {LoaderArea} from "./index.styled";

const Loader = () => {
    return(
        <LoaderArea>
            <div className="spin"/>
            <div className="bounce"/>
        </LoaderArea>
    )
}

export default Loader;