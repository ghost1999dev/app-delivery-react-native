import { ResponseApiDelivery } from "../../Data/sources/models/ResponseApiDelivery";
import { User } from "../entity/User";

export interface AuthRepository {
    register(user: User):Promise<ResponseApiDelivery>
}