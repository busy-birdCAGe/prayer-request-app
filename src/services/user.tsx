import { CognitoUserPool } from "amazon-cognito-identity-js";
// import { errorMessages } from "../constants";
import { ApiHandler } from "../utils/Api";
import { auth_service_url, UserPoolConfig } from "../env";

let UserPool = new CognitoUserPool(UserPoolConfig);

// class User {
//   constructor(public userName: string, public userId: string) {}
// }

// interface PageAuthState {
//   authenticated: boolean;
//   loading: boolean;
// }

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

class UserService {
  userPool: CognitoUserPool;
  api: ApiHandler;

  constructor(userPool: CognitoUserPool) {
    this.userPool = userPool;
    this.api = new ApiHandler();
  }

  async signUp(
    userName: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.api.req(auth_service_url + "/signup", "POST", true, {
      userName,
      email,
      password,
    });
  }

  async signIn(email: string, password: string): Promise<void> {
    let tokens = await this.api.req(auth_service_url + "/signin", "POST", true, {
      email,
      password,
    });
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }

  async signedIn(): Promise<boolean> {
    try {
      console.log("true")
      await this.api.req(auth_service_url + "/authorized", "GET", false);
      return true;
    } catch (error: any) {
      console.log(error)
      return false;
    }
  }
}

export let userService = new UserService(UserPool);
