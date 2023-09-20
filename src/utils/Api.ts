import queryString from "query-string";

export class ApiHandler {
  accessToken: string | null;
  refreshToken: string | null;
  cache: Record<string, any>;

  constructor() {
    this.accessToken = localStorage.getItem("accessToken");
    this.refreshToken = localStorage.getItem("refreshToken");
    this.cache = JSON.parse(
      localStorage.getItem("cache") || JSON.stringify({})
    );
  }

  getCachedResult(url: string): any | void {
    if (this.cache[url]) {
      if (this.cache[url].timestamp <= Date.now() - 5 * 60 * 1000) {
        delete this.cache[url];
      } else {
        return this.cache[url].data;
      }
    }
  }

  cacheResult(url: string, data: any): any {
    this.cache[url] = { timestamp: Date.now(), data: data };
    localStorage.setItem("cache", JSON.stringify(this.cache));
    return data;
  }

  resetCache(): void {
    localStorage.setItem("cache", JSON.stringify({}));
    this.cache = {};
  }

  async req(
    url: string,
    method: string,
    json: boolean = true,
    body?: object,
    query?: object
  ): Promise<any> {
    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (this.accessToken) {
      headers.Authorization = this.accessToken;
    }
    if (query) {
      url = url + "?" + queryString.stringify(query);
    }
    if (method == "GET") {
      let cachedResult = this.getCachedResult(url);
      if (cachedResult) {
        return cachedResult;
      }
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
    let result;
    if (json) {
      result = await response.json();
    } else {
      result = await response.text();
    }
    if (method == "GET") {
      return this.cacheResult(url, result);
    }
    this.resetCache();
    return result;
  }
}
