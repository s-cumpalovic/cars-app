import { httpService } from "./HttpService";
import CarsErrors from "./ErrorHandlers/CarsErrors";

class CarsService {
  constructor() {
    this.axiosObj = httpService.axiosObj;
  }
  async getAll() {
    const response = await this.axiosObj
      .get("/cars")
      .catch((error) => CarsErrors(error));

    return response;
  }

  async create(obj) {
    const response = await this.axiosObj
      .post("/cars", obj)
      .catch((error) => CarsErrors(error));

    return response;
  }

  async get(id) {
    const response = await this.axiosObj
      .get(`/cars/${id}`)
      .catch((error) => CarsErrors(error));

    return response;
  }

  async edit(id, car) {
    const response = await this.axiosObj
      .put(`/cars/${id}`, car)
      .catch((error) => CarsErrors(error));

    return response;
  }

  async delete(id) {
    const response = await this.axiosObj
      .delete(`/cars/${id}`)
      .catch((error) => CarsErrors(error));

    return response;
  }
}

export default new CarsService();
