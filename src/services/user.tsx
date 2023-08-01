import { auth, firestore } from './firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, Auth, UserCredential } from "firebase/auth";
import { collection, addDoc, Firestore, CollectionReference } from "firebase/firestore";
import { userCollection } from "../constants";

class UserService {

    auth: Auth
    firestore: Firestore
    userCollection: CollectionReference

    constructor(auth: Auth, firestore: Firestore) {
        this.auth = auth
        this.firestore = firestore
        this.userCollection = collection(firestore, userCollection)
    }

    async createUser(userName: string, email: string, password: string): Promise<string> {
        let credentials = await createUserWithEmailAndPassword(this.auth, email, password)
        let doc = await addDoc(this.userCollection, {"username": userName, "email": credentials.user.email, "userId": credentials.user.uid})
        return doc.id
    }

    async sendEmailVerification() {
        let user = this.auth.currentUser;
        if (user) {
            await sendEmailVerification(user, {
                url: "http://localhost:5173"
            })
        }
        else {
            throw "No user signed in"
        }
    }
}    

export let userService = new UserService(auth, firestore);
