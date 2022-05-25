class AuthService {
  setAccessToken(val: string): void {
    window.localStorage.setItem("accessToken", val);
  }
  getAccessToken(): string {
    return <string>window.localStorage.getItem("accessToken");
  }
  clearStorage(): void {
    window.localStorage.clear();
  }
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}
const auth_service = new AuthService();
export default auth_service;
