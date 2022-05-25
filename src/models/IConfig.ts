import { AxiosRequestConfig } from "axios";

interface IConfig extends AxiosRequestConfig {
  showSpinner?: boolean;
}
export default IConfig;
