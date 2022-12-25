
import {collection, getDocs} from "firebase/firestore";
import {db} from "../lib/firebase-config";

const getDocsRef = getDocs(collection(db, "docs"));

export const getDocsData = () => {
     return new Promise<object>((resolve, rejects)=>{
        getDocsRef.then((result) => {
            resolve(result);
        }).catch((err)=>{
            rejects(err)
        })
    })
}

