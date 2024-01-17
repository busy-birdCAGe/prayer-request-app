import queryString from "query-string";

interface apiRequestParams {
  url: string;
  method: string;
  json?: boolean;
  body?: object;
  query?: object;
  cache?: boolean;
}

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

  async req(requestInput: apiRequestParams): Promise<any> {
    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (this.accessToken) {
      headers.Authorization = this.accessToken;
    }
    if (requestInput.query) {
      requestInput.url =
        requestInput.url + "?" + queryString.stringify(requestInput.query);
    }
    if (requestInput.method == "GET" && requestInput.cache) {
      let cachedResult = this.getCachedResult(requestInput.url);
      if (cachedResult) {
        return cachedResult;
      }
    }
    const response = await fetch(requestInput.url, {
      method: requestInput.method,
      headers: headers,
      body: JSON.stringify(requestInput.body),
    });
    if (!response.ok) {
      let errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    let result;
    if (requestInput.json) {
      result = await response.json();
    } else {
      result = await response.text();
    }
    if (requestInput.method == "GET") {
      if (requestInput.cache) {
        return this.cacheResult(requestInput.url, result);
      }
      return result;
    }
    this.resetCache();
    return result;
  }
}
