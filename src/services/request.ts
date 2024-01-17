import { ApiHandler } from "../utils/Api";
import { backend_url } from "../env";

export interface RequestView {
    _id: number;
    text: string;
    userName?: string
}

class RequestService {
  api: ApiHandler;

  constructor() {
    this.api = new ApiHandler();
  }

  async getCommunityRequests(
    churches: Array<string>,
    limit: number,
    offset: number
  ): Promise<Array<RequestView>> {
    return await this.api.req({
      url: backend_url + "/requests",
      method: "GET",
      json: true,
      body: {
        churches,
        limit,
        offset,
      }
    });
  }

  async createRequest(
    text: string,
    churches: Array<string>,
    anonymous: boolean,
    personal: boolean
  ): Promise<void> {
    return await this.api.req({
      url: backend_url + "/requests",
      method: "POST",
      json: true,
      body: {
        text,
        anonymous,
        personal,
        churches,
      }
    });
  }
}

export default new RequestService();
