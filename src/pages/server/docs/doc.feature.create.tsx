import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc} from "firebase/firestore";
import {auth, db} from "../../../lib/firebase-config";

import {getDocsData} from "../../../services/globals";

//Styled Document Feature Create
import {DocArea} from "./doc.created.styled";

import Editor from "../../../lib/editor";
import {$getRoot, EditorState} from "lexical";




type Docs = {
    _name?: string,
};

type Category = {
    _name?: string[],
};


const DocFeatureCreate = () => {

    let navigation = useNavigate();

    //Document Features State
    const [_getDocFeatureName, _setDocFeatureName] = useState<string>("blank");

    //Document State
    const [_getDoc, _setDoc] = useState<Docs[]>([]);

    const [_getDocName, _setDocName] = useState<string>("blank");

    //Document Category State
    const [_getCategory, _setCategory] = useState<Category[]>([]);

    const [_getCategoryName, _setCategoryName] = useState<string>("blank");

    //Firebase Collection Reference
    const _docsCollectionRef = doc(db, 'docs', _getDocName)
    const _categoryCollectionRef = collection(_docsCollectionRef, _getCategoryName)
    const _categoryDocRef = doc(_categoryCollectionRef,_getCategoryName)
    const _featureDocRef = doc(db,_categoryDocRef.path,_getDocFeatureName,_getDocFeatureName);

    //Firebase Get Document Categories Function
    const getCategory = (docName:string) => {
        const DocCategoryRef = collection(db,"docs") //Not Object-Oriented
        const t = doc(DocCategoryRef,docName);
        getDoc(t).then(y=>(
            // @ts-ignore
            y.get("category").map((n,m)=>{
                _setCategory(prevState => [...prevState, {_name:n}])
                _setCategoryName(n)
            })
        ))
    }

    //Set
    const docFeatureCreate = async () => {
        await setDoc(_featureDocRef, {
            name:_getDocFeatureName,
            author: {name: auth.currentUser?.displayName, id: auth.currentUser?.uid}
        }).then(result => {
            updateDoc(_categoryDocRef, {
                features:arrayUnion(_getDocFeatureName)
            })
            console.log("Document has been added succesfully");
            navigation("/");
        }).catch(error => {
            console.log(error+"Document has been added error");
        })
    }


    const onChange:(editorState: EditorState) => Promise<void> = async (props) => {
        return props.read(()=> {
            const root = $getRoot();
            const selection = getSelection();
            console.log(root.__cachedText)
        })
    }

    useEffect(()=>{
        getDocsData().then((result)=>{
            // @ts-ignore
            result.docs.map((data)=>{
                getDoc(doc(db,"docs",data.id)).then((e)=>{
                    // @ts-ignore
                    _setDoc(prevEmployees => [...prevEmployees, {_name:e.data().getDocName}]);
                    _setDocName(data.id);
                    getCategory(data.id);
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
                            <select
                                onChange={(e) =>{
                                    _setCategory([])
                                    getCategory(e.target.value)
                                }}
                            >
                                {
                                    _getDoc.map(key => (
                                        <option
                                            key={key._name}
                                            value={key._name}
                                        >
                                            {key._name}
                                        </option>
                                    ))
                                }
                            </select>
                        }
                        {
                            <select>
                                {
                                    _getCategory.map((key,index) => (
                                        <option
                                            key={index}
                                            value={key._name}
                                        >
                                            {key._name}
                                        </option>
                                    ))
                                }
                            </select>
                        }
                        <input placeholder={"Title"}
                               onChange={(event => {
                                   _setDocFeatureName(event.target.value)
                               })}
                        />
                        <Editor onChange={(editorState) =>onChange(editorState)}/>
                        <button onClick={docFeatureCreate}>Submit Post</button>
                    </div>
                </div>
            </div>
        </DocArea>
    )
}


export default DocFeatureCreate;