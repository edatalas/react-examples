
import React, {useEffect, useState} from "react";
import DocCategories from "./Doc.categories";
import {onSnapshot, DocumentReference} from "firebase/firestore";

interface Props {
    _docName:string;
    _data:DocumentReference;
}

type Docs = {
    _id:string;
};

const DocCard:React.FC<Props> = ( props) => {
    const [_getCategory, _setCategory] = useState<Docs[]>([]);

    useEffect(() => onSnapshot(props._data, (snapshot)=>{
        if (snapshot.get("category") !== undefined){
            snapshot.get("category").map((e: any)=>(
                _setCategory(prevEmployees => [...prevEmployees, {_id:e}])
            ))
        }
    }),[props._data]);

    return(
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="card">
                <div className="icon"/>
                <div className="content">
                    <h3>
                        {props._docName}
                    </h3>
                    <ul>
                    { _getCategory.map(c=>(
                        <DocCategories
                            key={c._id}
                            _id={props._docName}
                            _categories={c._id}
                        />
                    ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DocCard;