import { axiosObj } from "./AxiosService";

class CarsService {
  async getAll() {
    const response = await axiosObj.get("/cars");

    return response;
  }

  async add(obj) {
    const response = await axiosObj.post("/cars", obj);

    return response;
  }

  async get(id) {
    const response = await axiosObj.get(`/cars/${id}`);

    return response;
  }

  async edit(id, car) {
    const response = await axiosObj.put(`/cars/${id}`, car);

    return response;
  }

  async delete(id) {
    const response = await axiosObj.delete(`/cars/${id}`);

    return response;
  }
}

export default new CarsService();
