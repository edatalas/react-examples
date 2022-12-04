import React, {useEffect, useState} from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {db, auth} from "../../../lib/firebase-config"
import {useNavigate} from "react-router-dom";
import {DocArea} from "./doc.created.styled";
import {DocCategory} from "../../../contants/docs/custom.categories";

const LibDocsCreate = () => {
    let navigation = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('isAuth') === "false" ||
            localStorage.getItem('isAuth') === null){
            navigation("/login");
        }
    })

    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [getDocCategory, setDocCategory] = useState<DocCategory>(DocCategory.GettingStarted);


    const DocsCollectionRef = collection(db, 'docs')
    const DocCreateCompRef = collection(DocsCollectionRef, "component", "popup")
    const DocCreateCompContentRef = collection(DocCreateCompRef, getDocCategory,"v1");


    const createPost = async () => {
        await addDoc(DocCreateCompContentRef, {
            title,
            post,
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
                    <h1> Create Library Documentation</h1>
                    <div className="doc-create-from">
                        <input placeholder={"Title"}
                               onChange={(event => {
                                   setTitle(event.target.value)
                               })}
                        />

                    <textarea
                        placeholder={"Post"}
                        onChange={(event => {
                            setPost(event.target.value)
                        })}
                    />

                    <select
                        value={getDocCategory}
                        onChange={(e) => {
                            setDocCategory(DocCategory[e.target.value as keyof typeof DocCategory]);
                        }}
                    >
                        {
                          Object.keys(DocCategory).map(key => (
                              <option key={key} value={key}>
                                  {   // @ts-ignore
                                      DocCategory[key]
                                  }
                              </option>
                          ))
                        }
                    </select>

                    <button onClick={createPost}>Submit Post</button>
                    </div>
                </div>
            </div>
        </DocArea>
    )
}


export default LibDocsCreate;