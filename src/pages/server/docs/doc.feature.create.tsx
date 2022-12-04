import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {collection, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
import {auth, db} from "../../../lib/firebase-config";

import {getDocsData} from "../../../services/globals";

//Styled
import {DocArea} from "./doc.created.styled";

type Docs = {
    _name?: string,
    _category?:string
};

//const x = doc(db, "docs",_getDocCatName);

//const y = collection(x,"popup")

const DocFeatureCreate = () => {
    let navigation = useNavigate();

    const [_getDocFeature, _setDocFeature] = useState<string>("blank");

    const [_getDoc, _setDoc] = useState<Docs[]>([]);

    //State Doc Name
    const [_getDocName, _setDocName] = useState<string>("component");

    const DocsCollectionRef = doc(db, 'docs', _getDocName)

    const DocCategoryRef = doc(db,DocsCollectionRef.path);

    const DocFeatureRef = doc(db,DocCategoryRef.path);

    const docFeatureCreate = async () => {
        await setDoc(DocFeatureRef, {
            name:_getDocFeature,
            author: {name: auth.currentUser?.displayName, id: auth.currentUser?.uid}
        }).then(result => {
            console.log("Document has been added succesfully");
            navigation("/");
        }).catch(error => {
            console.log(error+"Document has been added error");
        })
    }


    useEffect(()=>{
        getDocsData().then((result)=>{
            // @ts-ignore
            result.docs.map((data)=>{
                getDoc(doc(db,"docs",data.id)).then((e)=>{
                    _setDoc(prevEmployees => [...prevEmployees, {_name:data.id, _category:Object(e.data()).name}]);
                })
            })
        })
    },[]);

    return(
        <DocArea>
            <div className="container">
                <div className="row">
                    <h1> Create Feature </h1>
                    <div className="doc-create-from">
                        {
                            <select>
                                {
                                    _getDoc.map(key => (
                                        <option key={key._name} value={key._name}>
                                            {key._name}
                                        </option>
                                    ))
                                }
                            </select>
                        }
                        {
                            <select>
                                {
                                    _getDoc.map(key => (
                                        <option key={key._category} value={key._category}>
                                            {key._category}
                                        </option>
                                    ))
                                }
                            </select>
                        }
                        <input placeholder={"Title"}
                               onChange={(event => {
                                   _setDocFeature(event.target.value)
                               })}
                        />
                        <button onClick={docFeatureCreate}>Submit Post</button>
                    </div>
                </div>
            </div>
        </DocArea>
    )
}


export default DocFeatureCreate;