import React, {useEffect, useState} from "react";
import {addDoc, collection, doc, getDocs, setDoc, updateDoc, arrayUnion} from "firebase/firestore";
import {auth, db} from "../../../lib/firebase-config";
import {DocArea} from "./doc.created.styled";
import {useNavigate} from "react-router-dom";

//GlobalData
import {getDocsData} from "../../../services/globals";

type Docs = {
    name: string;
};

const DocCategoryCreate = () =>{
    let navigation = useNavigate();

    //State Doc Data
    const [_getDoc, _setDoc] = useState<Docs[]>([]);

    //State Doc Name
    const [_getDocName, _setDocName] = useState<string>("blank");

    //State Doc Category Name
    const [_getDocCatName, _setDocCatName] = useState("blank");

    const x = doc(db, "docs",_getDocName);

    const y = collection(x, _getDocCatName)

    const z = doc(y,_getDocCatName)

    const docCategoryCreate = async () => {
        await setDoc(z, {
            name:_getDocCatName,
            author: {name: auth.currentUser?.displayName, id: auth.currentUser?.uid}
        }).then(result => {
            updateDoc(x,{
                category:arrayUnion(_getDocCatName)
            })
            console.log("Document Category has been added succesfully");
            navigation("/");
        }).catch(error => {
            console.log(error+"Document has been added error");
        })
    }

    useEffect(()=> {
        getDocsData()
            .then((result)=>{
                // @ts-ignore
                result.docs.map((data)=>{
                    _setDoc(prevEmployees => [...prevEmployees, {name:data.id}]);
                    _setDocName(data.id);
                })
            })
            .catch((err)=>{
                console.log(err.name)
            })
            .finally(() => {
            })

    },[]);

    return(
        <DocArea>
            <div className="container">
                <div className="row">
                    <h1> Create Document Category</h1>
                    <div className="doc-create-from">
                        {
                            <select
                                onChange={(e) =>{
                                    _setDocName(e.target.value)
                                }}
                            >
                                {
                                    _getDoc.map(key => (
                                        <option key={key.name} value={key.name}>
                                            {key.name}
                                        </option>
                                    ))
                                }
                            </select>

                        }
                        <input placeholder={"Title"}
                               onChange={(event => {
                                   _setDocCatName(event.target.value)
                               })}
                        />
                        <button onClick={docCategoryCreate}>Submit Post</button>
                    </div>
                </div>
            </div>
        </DocArea>
    )
}

export default DocCategoryCreate;