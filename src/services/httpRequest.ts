import { AxiosInstance } from "axios";
import { axios_instance } from "./initRequest";

class HttpRequest {
  api: AxiosInstance;
  constructor() {
    this.api = axios_instance;
  }
  async get(url: string, config: any) {
    return this.api.get(url, config);
  }
  async post(url: string, data: any, config: any) {
    return this.api.post(url, data, config);
  }
}
const http_request = new HttpRequest();
export default http_request;
