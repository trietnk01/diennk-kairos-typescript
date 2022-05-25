import { AxiosInstance } from "axios";
import IConfig from "models/IConfig";
import { axios_instance } from "./initRequest";

class HttpRequest {
  api: AxiosInstance;
  constructor() {
    this.api = axios_instance;
  }
  async get(url: string, config: IConfig) {
    return this.api.get(url, config);
  }
  async post(url: string, bodyData: any, config: IConfig) {
    return this.api.post(url, bodyData, config);
  }
}
const http_request = new HttpRequest();
export default http_request;
