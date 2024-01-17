import { ApiHandler } from "../utils/Api";
import { backend_url } from "../env";

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

class UserService {
  api: ApiHandler;

  constructor() {
    this.api = new ApiHandler();
  }

  async signUp(
    userName: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.api.req({
      url: backend_url + "/signup",
      method: "POST",
      body: {
        userName,
        email,
        password,
      }
    });
  }

  async signIn(email: string, password: string): Promise<void> {
    let tokens = await this.api.req({
      url: backend_url + "/signin",
      method: "POST",
      json: true,
      body: {
        email,
        password,
      }
    });
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }

  async signedIn(): Promise<boolean> {
    try {
      await this.api.req({
        url:  backend_url + "/authorized",
        method: "GET"
      });
      return true;
    } catch (error: any) {
      return false;
    }
  }
}

export default new UserService();
