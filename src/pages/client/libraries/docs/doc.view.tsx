import React from "react";
import { useParams } from 'react-router-dom';

const DocView = () => {
    const { slug } = useParams();

    return(
        <>
            {slug}
        </>
    )
}

export default DocView;