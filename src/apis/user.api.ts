import http_request from "services/httpRequest";

export const login = async (url: string, data: any) => {
  return http_request.post(url, data, { showSpinner: true });
};
export const logout = async (url: string, accessToken: string) => {
  return http_request.post(url, null, { headers: { Authorization: "Bearer " + accessToken }, showSpinner: true });
};
export const authenticated = async (url: string, accessToken: string) => {
  return http_request.post(url, null, { headers: { Authorization: "Bearer " + accessToken }, showSpinner: true });
};
