export class ApiHandler {
  accessToken: string | null;
  refreshToken: string | null;

  constructor() {
    this.accessToken = localStorage.getItem("accessToken");
    this.refreshToken = localStorage.getItem("refreshToken");
  }

  async req(url: string, method: string, body?: object): Promise<any> {
    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (this.accessToken) {
      headers.Authorization = this.accessToken;
    }
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      let errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return await response.json()
  }
}
