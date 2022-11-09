import { axiosObj } from "./AxiosService";

class CarsService {
  async getAll() {
    const response = await axiosObj.get("/cars");

    return response.data;
  }

  async add(obj) {
    const response = await axiosObj.post("/cars", obj);

    return response;
  }

  async get(id) {
    const response = await axiosObj.get(`/cars/${id}`);

    return response.data;
  }

  async edit(id, car) {
    const response = await axiosObj.patch(`/cars/${id}`, car);

    return response;
  }
}

export default new CarsService();
