import { initializeApp } from "firebase/app";
import { firebase_config } from "../src/env";

export const firebase_app = initializeApp(firebase_config);