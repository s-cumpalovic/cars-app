import { axiosObj } from "./AxiosService";
import CarsErrors from "./ErrorHandlers/CarsErrors";

class CarsService {
  async getAll() {
    const response = await axiosObj
      .get("/cars")
      .catch((error) => CarsErrors(error));

    return response;
  }

  async create(obj) {
    const response = await axiosObj
      .post("/cars", obj)
      .catch((error) => CarsErrors(error));

    return response;
  }

  async get(id) {
    const response = await axiosObj
      .get(`/cars/${id}`)
      .catch((error) => CarsErrors(error));

    return response;
  }

  async edit(id, car) {
    const response = await axiosObj
      .put(`/cars/${id}`, car)
      .catch((error) => CarsErrors(error));

    return response;
  }

  async delete(id) {
    const response = await axiosObj
      .delete(`/cars/${id}`)
      .catch((error) => CarsErrors(error));

    return response;
  }
}

export default new CarsService();
