import { auth, firestore } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Firestore,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import { userCollection, errorMessages } from "../constants";
import { base_url } from "../env";

class User {
  constructor(public userName: string, public userId: string) {}

  static fromDocument(doc: DocumentData): User {
    const { userName, userId } = doc;
    return new User(userName, userId);
  }
}

class UserService {
  auth: Auth;
  firestore: Firestore;
  userCollection: CollectionReference;

  constructor(auth: Auth, firestore: Firestore) {
    this.auth = auth;
    this.firestore = firestore;
    this.userCollection = collection(firestore, userCollection.name);
  }

  async getUserByUserName(userName: string): Promise<User | null> {
    try {
      const userNameQuery = query(
        this.userCollection,
        where(userCollection.fields.userName, "==", userName)
      );
      const querySnapshot = await getDocs(userNameQuery);
      if (querySnapshot.size === 0) {
        return null;
      }
      const doc = querySnapshot.docs[0].data();
      return User.fromDocument(doc);
    } catch (error: any) {
      console.log(error);
      throw new Error(errorMessages.database.any);
    }
  }

  async createUser(
    userName: string,
    email: string,
    password: string
  ): Promise<string> {
    let credentials;
    try {
      credentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
    } catch (error: any) {
      console.log(error);
      if (error.code == "auth/email-already-in-use") {
        throw new Error(errorMessages.auth.emailExists);
      } else {
        throw new Error(errorMessages.auth.any);
      }
    }
    try {
      let doc = await addDoc(this.userCollection, {
        [userCollection.fields.userName]: userName,
        [userCollection.fields.userId]: credentials.user.uid,
      });
      return doc.id;
    } catch (error: any) {
      console.log(error);
      throw new Error(errorMessages.database.any);
    }
  }

  async sendEmailVerification() {
    let user = this.auth.currentUser;
    if (user) {
      try {
        await sendEmailVerification(user, {
          url: base_url,
        });
      } catch (error: any) {
        console.log(error);
        throw new Error(errorMessages.auth.sendVerification);
      }
    } else {
      throw new Error(errorMessages.auth.noUser);
    }
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error: any) {
      console.log(error);
      throw new Error(errorMessages.auth.any);
    }
  }
}

export let userService = new UserService(auth, firestore);
