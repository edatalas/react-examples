import React, {useEffect, useState} from "react";

//Firebase
import {collection, getDoc,doc} from "firebase/firestore";
import {db} from "../../lib/firebase-config";

interface Props {
    _doc:string
    _category:string;
}

type Features = {
    _id: string;
};


const DocFeatures:React.FC<Props> = (props) => {

    const [_getFeatures, _setFeatures] = useState<Features[]>([]);

    const feature = collection(db, "docs",props._doc+"/"+props._category)
    const featureDocRef = doc(feature,props._category)

    useEffect(()=>{
        getDoc(featureDocRef).then(value => (
            value.get("features").map((feature: string)=>(
                _setFeatures( prevState => [...prevState, {_id:feature}])
            ))
        ))
    },[])

    return(
        <>
            {
                _getFeatures.map(feature=>(
                    <li key={feature._id}>
                        <a href="#">{feature._id}</a>
                    </li>
                ))
            }
        </>
    )
}

export default DocFeatures;