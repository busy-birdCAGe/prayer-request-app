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
    await this.api.req(auth_service_url + "/signup", "POST", {
      userName,
      email,
      password,
    });
  }

  async signIn(email: string, password: string): Promise<AuthTokens> {
    return await this.api.req(auth_service_url + "/signin", "POST", {
      email,
      password,
    });
  }

  async signedIn(): Promise<boolean> {
    try {
      await this.api.req(auth_service_url + "/authorized", "GET");
      return true;
    } catch (error: any) {
      return false;
    }
  }
}

export let userService = new UserService(UserPool);
