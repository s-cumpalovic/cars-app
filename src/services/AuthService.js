import { httpService } from "./HttpService";
import LoginErrors from "./ErrorHandlers/LoginErrors";
import RegisterError from "./ErrorHandlers/RegisterError";

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
    let response = await httpService.axiosObj
      .post("/login", data)
      .catch((error) => LoginErrors(error));
    if (response.data) {
      localStorage.setItem("token", response.data.authorisation.token);
      this.setAxiosAuthorizationHeader(response.data.authorisation.token);
      return response;
    }
  }

  async logout() {
    let response = await httpService.axiosObj.post("/logout");
    if (response.data) {
      localStorage.removeItem("token");
      return response.data;
    }
  }

  async register(data) {
    let response = await httpService.axiosObj
      .post("/register", data)
      .catch((error) => RegisterError(error));
    if (response.data) {
      localStorage.removeItem("token");
      localStorage.setItem("token", response.data.authorisation.token);
      this.setAxiosAuthorizationHeader(response.data.authorisation.token);
      return response;
    }
  }
}

export const authService = new AuthService();
