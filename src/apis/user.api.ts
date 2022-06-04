import http_request from "services/httpRequest";

export const login = async (url: string, data: any) => {
  return http_request.post(url, data, { showSpinner: true });
};
export const logout = async (url: string) => {
  return http_request.post(url, null, { showSpinner: true });
};
export const authenticated = async (url: string) => {
  return http_request.post(url, null, { showSpinner: true });
};
