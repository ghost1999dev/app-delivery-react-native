import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entity/User";

const {register} = new AuthRepositoryImpl()
export const RegisterAuthUseCase=async(user:User)=>{
    return await register(user)
}