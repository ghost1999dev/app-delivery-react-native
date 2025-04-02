import { User } from "../../Domain/entity/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../api/ApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User): Promise<any> {
        try {
            const response = await ApiDelivery.post('/users/save',user)
            return Promise.resolve({error:undefined, result: response.data})
        } catch (error) {
            let e = (error as Error).message
            console.log('Error:' + e);
            return Promise.resolve({error: e, result:undefined})
        }
    }
}