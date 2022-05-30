import axios from "axios";
import { END_POINT } from "configs";
import IAxios from "models/IAxios";
import { store } from "redux/store";
import loadingSlice from "slices/loadingSlice";
import auth_service from "./authService";
const item_axios: IAxios = {
  baseURL: <string>END_POINT.API_ENDPOINT,
  timeout: 5000,
  showSpinner: false,
};
export const axios_instance = axios.create(item_axios);
function initRequest(): void {
  let requestCount: number | 0 = 0;
  function decreaseRequestCount(): void {
    requestCount = requestCount - 1;
    if (requestCount === 0) {
      store.dispatch(loadingSlice.actions.hideSpinner());
    }
  }
  axios_instance.interceptors.request.use(
    function (config: any): any {
      if (<boolean>config.showSpinner) {
        requestCount++;
        store.dispatch(loadingSlice.actions.showSpinner());
      }
      const accessToken: string = auth_service.getAccessToken();
      if (accessToken) {
        config.headers["x-auth-token"] = accessToken;
      }
      return config;
    },
    function (err: any): any {
      if (<boolean>err.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(err);
    }
  );
  axios_instance.interceptors.response.use(
    function (res: any): any {
      if (<boolean>res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    function (err: any): any {
      if (<boolean>err.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(err);
    }
  );
}
export default initRequest;
