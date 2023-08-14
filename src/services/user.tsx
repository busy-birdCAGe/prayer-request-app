import {
  CognitoUserPool,
  // CognitoUserAttribute,
  // CognitoUser,
} from "amazon-cognito-identity-js";
// import { errorMessages } from "../constants";
import { auth_service_url, UserPoolConfig } from "../env";

let UserPool = new CognitoUserPool(UserPoolConfig);

// class User {
//   constructor(public userName: string, public userId: string) {}
// }

// interface PageAuthState {
//   authenticated: boolean;
//   loading: boolean;
// }

class UserService {
  userPool: CognitoUserPool;

  constructor(userPool: CognitoUserPool) {
    this.userPool = userPool;
  }

  async signUp(
    userName: string,
    email: string,
    password: string
  ): Promise<void> {
    const response = await fetch(auth_service_url + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });
    if (!response.ok) {
      let errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  }

  async signIn(email: string, password: string) {}
}

export let userService = new UserService(UserPool);
