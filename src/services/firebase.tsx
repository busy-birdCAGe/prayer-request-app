import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebase_config } from "../env";

export let firebase_app = initializeApp(firebase_config);
export let auth = getAuth(firebase_app);
export let firestore = getFirestore(firebase_app);