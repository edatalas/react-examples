import React, {useEffect, useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import {db, auth} from "../../../../firebase-config"
import {useNavigate} from "react-router-dom";

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

    const docCollectionRef = collection(db, 'lib')
    const DocRef = collection(docCollectionRef, "docs", "doc")


    const createPost = async () => {
        addDoc(DocRef, {
            title,
            post,
            author: {name: auth.currentUser?.displayName, id: auth.currentUser?.uid}
        });
        navigation("/");
    }

    return(
        <div className="row">
            <h1> Create Library Documentation</h1>
            <input placeholder={"Title"}
                   onChange={(event => {
                       setTitle(event.target.value)
                   })}
            />
            <textarea placeholder={"Post"}
                      onChange={(event => {
                          setPost(event.target.value)
                      })}
            />
            <button onClick={createPost}>Submit Post</button>
        </div>
    )
}

export default LibDocsCreate;