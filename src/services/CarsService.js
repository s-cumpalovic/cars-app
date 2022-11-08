import { axiosObj } from "./AxiosService";

class CarsService {
  async getAll() {
    const response = await axiosObj.get("/cars");
    console.log(response.data);

    return response;
  }
}

export default new CarsService();