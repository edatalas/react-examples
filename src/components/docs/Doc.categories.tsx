import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../lib/firebase-config";

import DocFeatures from "./Doc.features";

interface Props {
    _id:string;
    _categories:string;
}

type Categories = {
    _id: string;
};


const DocCategories:React.FC<Props> = (props) => {

    const [_getCategories, _setCategories] = useState<Categories[]>([]);

    const category = collection(db, "docs",props._id+"/"+props._categories)

    useEffect(()=>{
        getDocs(category).then(value => (
            value.docs.map(data=>(
                _setCategories(prevEmployees => [...prevEmployees, {_id:data.id}])
            ))
        ))
    },[]);

    return(
        <>
            {
                _getCategories.map(value => (

                    <li key={value._id}>
                        <a href="#">{value._id}</a>
                        <ul>
                            <DocFeatures _doc={props._id} _category={value._id}/>
                        </ul>
                    </li>
                ))
            }
        </>
    )
}

export default DocCategories;