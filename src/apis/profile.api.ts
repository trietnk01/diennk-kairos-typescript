import http_request from "services/httpRequest";
export const getProfileById = async (url: string) => {
  return http_request.get(url, { showSpinner: true });
};
