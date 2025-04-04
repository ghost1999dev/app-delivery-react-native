import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entity/User";
import { UserLocalRepository } from "../../repositories/UserLocalRepository";

const {save} = new UserLocalRepositoryImpl()

export const SaveUserUseCase = async (user:User)=>{
    return await save(user)
}