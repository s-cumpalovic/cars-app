import axios from "axios";
class AxiosService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:8000/api",
    });
  }
}

export const axiosObj =  new AxiosService().axiosInstance;