import React, {useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import {auth, db} from "../../../lib/firebase-config";
import {DocArea} from "./doc.created.styled";



const DocCreate = () => {
    let navigation = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('isAuth') === "false" ||
            localStorage.getItem('isAuth') === null){
            navigation("/login");
        }
    });

    const [getDocName, setDocName] = useState("blank");

    const DocsCollectionRef = doc(db, 'docs', getDocName)

    const docCreate = async () => {
        await setDoc(DocsCollectionRef, {
            getDocName,
            author: {name: auth.currentUser?.displayName, id: auth.currentUser?.uid}
        }).then(docRef => {
            console.log("Document has been added succesfully")
        }).catch(error => {
            console.log(error);
        });
        navigation("/");
    }


    return(
        <DocArea>
            <div className="container">
                <div className="row">
                    <h1> Create Documentation</h1>
                    <div className="doc-create-from">
                        <input placeholder={"Title"}
                               onChange={(event => {
                                   setDocName(event.target.value)
                               })}
                        />
                        <button onClick={docCreate}>Submit Post</button>
                    </div>
                </div>
            </div>
        </DocArea>
    )
}

export default DocCreate;