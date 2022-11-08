import { axiosObj } from "./AxiosService";

class CarsService {
  async getAll() {
    const response = await axiosObj.get("/cars");
    console.log(response.data);

    return response.data;
  }

  async add(obj){
    const response = await axiosObj.post("/cars", obj);

    return response
  }
}

export default new CarsService();