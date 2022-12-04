import React, {useEffect, useState} from "react";
import Header from "../components/header";
import {HomeArea} from "./Home.styled";
import DocCard from "../components/docs/Doc.card";
import {onSnapshot,getDoc,DocumentReference} from "firebase/firestore"
import {docsCollection} from "../lib/controller";

type Docs = {
    _id: string
    _data:DocumentReference
};

const Home = () => {
    //State Doc Data
    const [_getDoc, _setDoc] = useState<Docs[]>([]);

    useEffect(() => onSnapshot(docsCollection, (snapshot)=>{

        const promises = snapshot.docs.map(doc=>(
           getDoc(doc.ref)
        ))

        const pro = Promise.all(promises).then(c=>(
            c.map(result=>{
                // @ts-ignore
                console.log()
                // @ts-ignore
                _setDoc(prevEmployees => [...prevEmployees, {_id:result.id, _data:result.ref}]);
            })
        ))
    }),[]);

    return(
        <>
            <Header title={"Documentation"}/>
            <HomeArea>
                <div className="container">
                    <div className="row">
                        {
                            _getDoc.map((key,index)=>(
                                <DocCard
                                    key={key._id}
                                    _docName={key._id}
                                    _data={key._data}
                                />
                            ))
                        }
                    </div>
                </div>
            </HomeArea>
        </>
    )
}

export default Home;