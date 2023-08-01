import { auth, firestore } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
import { userCollection } from "../constants";
import { base_url } from "../env";

class User {
  constructor(
    public userName: string,
    public email: string,
    public userId: string
  ) {}

  static fromDocument(doc: DocumentData): User {
    const { userName, email, userId } = doc;
    return new User(userName, email, userId);
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
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const emailQuery = query(
      this.userCollection,
      where(userCollection.fields.email, "==", email)
    );
    const querySnapshot = await getDocs(emailQuery);
    if (querySnapshot.size === 0) {
      return null;
    }
    const doc = querySnapshot.docs[0].data();
    return User.fromDocument(doc);
  }

  async createUser(
    userName: string,
    email: string,
    password: string
  ): Promise<string> {
    let credentials = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    let doc = await addDoc(this.userCollection, {
      [userCollection.fields.userName]: userName,
      [userCollection.fields.email]: credentials.user.email,
      [userCollection.fields.userId]: credentials.user.uid,
    });
    return doc.id;
  }

  async sendEmailVerification() {
    let user = this.auth.currentUser;
    if (user) {
      await sendEmailVerification(user, {
        url: base_url,
      });
    } else {
      throw "No user signed in";
    }
  }
}

export let userService = new UserService(auth, firestore);
