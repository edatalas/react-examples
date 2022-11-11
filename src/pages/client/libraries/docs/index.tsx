import React, {useEffect, useState} from "react";
import {collection, getDocs} from 'firebase/firestore'
import {db} from "../../../../firebase-config";

//components
import Docs from "../../../../components/docs/Docs";
const AllLibDocs = () => {

    const [postList, setPostList] = useState<any>([]);

    const collectionRef = collection(db, 'lib')
    const docsRef = collection(collectionRef, "docs", "doc")

    useEffect(() => {
        const getLibDocs = async () => {
            const data = await getDocs(docsRef);
            setPostList(data.docs.map((doc) => ({
                ...doc.data(),
                id:doc.id
            })));
        };
        getLibDocs();
    });

    return(
        <Docs>
            {postList.map((post:any)=>{
                return (
                    <li key={post.id}>
                        <a href={"/"}>
                            <i className="icon"></i>
                            {post.title}
                        </a>
                    </li>
                )
            })}
        </Docs>
    )
}
export default AllLibDocs;