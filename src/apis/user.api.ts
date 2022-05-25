import http_request from "services/httpRequest";

export const loginUser = async (url: string, bodyData: any) => {
  return http_request.post(url, bodyData, { showSpinner: true });
};
export const authenticated = async (url: string, accessToken: string) => {
  return http_request.post(
    url,
    {},
    {
      headers: {
        "x-auth-token": accessToken,
      },
      showSpinner: true,
    }
  );
};
