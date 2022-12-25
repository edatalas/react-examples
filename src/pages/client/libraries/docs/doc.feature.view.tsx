import React from "react";
import { useParams } from 'react-router-dom';
import Header from "../../../../components/header";

const DocView = () => {
    const { slug } = useParams();

    return(
        <>
            <Header title={slug}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-9">
                        <div>
                            <p>Desc</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocView;