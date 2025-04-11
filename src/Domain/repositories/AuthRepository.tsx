import { ResponseApiDelivery } from "../../Data/sources/models/ResponseApiDelivery";
import { User } from "../entity/User";
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
    register(user: User):Promise<ResponseApiDelivery>
    login(email:string,password:string): Promise<ResponseApiDelivery>
    registerWithImage(user:User, file:ImagePicker.ImageInfo):Promise<ResponseApiDelivery>
}