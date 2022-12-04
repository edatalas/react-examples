import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../lib/firebase-config";

interface Props {
    _id:string;
    _categories:string;
}

type DocsCategories = {
    _id: string;
};


const DocCategories:React.FC<Props> = (props) => {

    const [_getDoc, _setDoc] = useState<DocsCategories[]>([]);

    const category = collection(db, "docs",props._id+"/"+props._categories)

    useEffect(()=>{
        // @ts-ignore
        getDocs(category).then(value => (
            value.docs.map(data=>(
                _setDoc(prevEmployees => [...prevEmployees, {_id:data.id}])
            ))
        ))
    },[])

    return(
        <>
            {
                _getDoc.map(value => (

                    <li key={value._id}>
                        {value._id}
                    </li>
                ))
            }
        </>
    )
}

export default DocCategories;