import { httpService } from "./HttpService";

class AuthService {
  constructor() {
    this.axiosObj = httpService.axiosObj;
    this.setAxiosAuthorizationHeader();

    this.axiosObj.interceptors.request.use(function (config) {
      let token = localStorage.getItem("token");
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");

    if (token) {
      httpService.axiosObj.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }

  getToken() {
    let tokenJSON = localStorage.getItem("token");
    const token = JSON.parse(tokenJSON);
    return token;
  }

  async login(data) {
    let response = await httpService.axiosObj.post("/login", data);
    if (response.data) {
      localStorage.setItem("token", response.data.authorisation.token);
      this.setAxiosAuthorizationHeader(response.data.authorisation.token);
      return response;
    }
  }

  async logout() {
    let response = await httpService.axiosObj.post("/logout");
    if (response.data) {
      localStorage.removeItem('token');
      return response.data;
    }
  }
}

export const authService = new AuthService();
