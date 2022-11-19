import { httpService } from "./HttpService";

class AuthService {
  constructor() {
    this.axiosObj = httpService.axiosObj;
    this.setAxiosAuthorizationHeader();
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");

    if (token) {
      httpService.axiosObj.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }

  async login(data) {
    let response = await httpService.axiosObj.post("/login", data);
    if (response.data) {
      localStorage.setItem("token", response.data.authorisation.token);
      this.setAxiosAuthorizationHeader(response.data.authorisation.token);
    }
  }
}

export const authService = new AuthService();
