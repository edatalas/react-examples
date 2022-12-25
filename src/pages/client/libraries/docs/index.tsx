import React, {useEffect, useState} from "react";
import {collection, getDocs} from 'firebase/firestore'
import {db} from "../../../../lib/firebase-config";

//components
import Docs from "../../../../components/docs/Docs";
import Header from "../../../../components/header";
import Loader from "../../../../components/loader";

const AllLibDocs = () => {

    const [postList, setPostList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const collectionRef = collection(db, 'lib')
    const docsRef = collection(collectionRef, "docs", "doc")


    useEffect(() => {
        const getLibDocs = async () => {
            const data = await getDocs(docsRef);
            setPostList(data.docs.map((doc) => ({
                ...doc.data(),
                id:doc.id
            })));
            setLoading(false);
        };
        getLibDocs();
    });

    return(
        <>
            <Header title="d"/>
            <Docs>
            {loading == true ? <h1>
                <Loader/>
            </h1> :
                <>
                    {postList.map((post:any) => {
                        return (
                            <li key={post.id}>
                                <a href={"/"}>
                                    <i className="icon"></i>
                                    {post.title}
                                </a>
                            </li>

                        )
                    })}
                </>
            }
            </Docs>
        </>
    )
}
export default AllLibDocs;