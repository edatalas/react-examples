import {collection, getFirestore} from "firebase/firestore";

import {app} from "./firebase-config";

export const firestore = getFirestore(app);

export const docsCollection = collection(firestore,"docs");