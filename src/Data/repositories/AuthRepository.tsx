import { AxiosError } from "axios";
import { User } from "../../Domain/entity/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/models/ResponseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>("/users/save", user);
      return Promise.resolve(response.data)
    } catch (error) {
      let e = (error as AxiosError)
      const apiError:ResponseApiDelivery= JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError);
    }
  }
}
